# Aplicacao de rotas e viagens

### Para rodar voce precisa fazer os seguinte comandos:

Voce precisa preenchar os dados em .env

Por se tratar de uma aplicacao com sequelize, se voce inserir qualquer dado de um banco de dados postgres ele ira automaticamente criar o banco e popular. Podendo facilmente ser utilizado em qualquer outro lugar

``` bash
npm install

sequelize db:create
sequelize db:migrate
sequelize db:seed:all

npm run start

```

## Exemplo para reports:

### URL : localhost:5000/api/reports/points?latMin=-20&latMax=20&longMin=-100&longMax=0
``` JSON
{
    "pontooid": 16,
    "latitude": -13.55452,
    "longitude": -41.637308,
    "nome": "Ponto K",
    "descricao": "Descrição do Ponto K",
    "createdat": "2024-07-05T03:34:18.524Z",
    "updatedat": "2024-07-05T03:34:18.526Z"
}
```

### URL : localhost:5000/api/reports/routes?name=3&description=3
``` JSON
[
	{
		"rotaoid": 5,
		"nome": "Rota 3",
		"descricao": "Descrição da Rota 3",
		"createdat": "2024-07-05T03:34:18.527Z",
		"updatedat": "2024-07-05T03:34:18.527Z"
	},
	{
		"rotaoid": 14,
		"nome": "Rota 3",
		"descricao": "Descrição da Rota 3",
		"createdat": "2024-07-05T03:34:55.005Z",
		"updatedat": "2024-07-05T03:34:55.005Z"
	},
	{
		"rotaoid": 23,
		"nome": "Rota 3",
		"descricao": "Descrição da Rota 3",
		"createdat": "2024-07-05T03:36:30.586Z",
		"updatedat": "2024-07-05T03:36:30.586Z"
	}
]
```



## Exemplo de JSON para a tabela "conexoes" (connections):

### URL : localhost:5000/api/connections
``` JSON
{
  "pontooid_de": 1,
  "pontooid_para": 2,
  "distancia": 5.0,
  "tempo": 10,
  "tipo_transporte": "Ônibus"
}
```

## Exemplo de JSON para a tabela "rotas" (routes):

### URL : localhost:5000/api/routes

``` JSON
{
  "nome": "Rota ...",
  "descricao": "Descrição da Rota ..."
}
```

## Exemplo de JSON para a tabela "segmentosRota" (routeSegments):

### URL : localhost:5000/api/routes/:ROTAOID/segments

``` JSON
{
  "pontooid_de": 1,
  "pontooid_para": 2,
  "sequencia": 1,
  "instrucoes": "Siga pela Rua A"
}
```

## Scripts de criação das tabelas:

``` SQL
CREATE TABLE points (
    pontooid SERIAL PRIMARY KEY,
    latitude FLOAT NOT NULL CHECK (latitude BETWEEN -90 AND 90),
    longitude FLOAT NOT NULL CHECK (longitude BETWEEN -180 AND 180),
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE routes (
    rotaoid SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE routeSegments (
    segmentooid SERIAL PRIMARY KEY,
    rotaoid INTEGER NOT NULL,
    pontooid_de INTEGER NOT NULL,
    pontooid_para INTEGER NOT NULL,
    sequencia INTEGER NOT NULL,
    instrucoes TEXT,
    FOREIGN KEY (rotaoid) REFERENCES Routes(rotaoid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (pontooid_de) REFERENCES Points(pontooid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (pontooid_para) REFERENCES Points(pontooid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE connections (
    conexaooid SERIAL PRIMARY KEY,
    pontooid_de INTEGER NOT NULL,
    pontooid_para INTEGER NOT NULL,
    distancia FLOAT NOT NULL CHECK (distancia >= 0),
    tempo FLOAT NOT NULL CHECK (tempo >= 0),
    tipo_transporte VARCHAR(255) NOT NULL,
    FOREIGN KEY (pontooid_de) REFERENCES Points(pontooid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (pontooid_para) REFERENCES Points(pontooid) ON DELETE CASCADE ON UPDATE CASCADE
);


```

## Views

``` SQL
CREATE VIEW activeRoutes AS
SELECT r.rotaoid, r.nome, r.descricao, COUNT(rs.segmentooid) AS numero_segmentos
FROM routes r
JOIN routeSegments rs ON r.rotaoid = rs.rotaoid
GROUP BY r.rotaoid, r.nome, r.descricao;

```

## Procedures

``` SQL
CREATE OR REPLACE PROCEDURE AddNewRoute(nome VARCHAR, descricao TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO routes (nome, descricao) VALUES (nome, descricao);
END;
$$;
----
CREATE OR REPLACE PROCEDURE public.addnewpoint(
	IN latitude double precision,
	IN longitude double precision,
	IN nome character varying,
	IN descricao text)
LANGUAGE 'plpgsql'
AS $BODY$
BEGIN
    INSERT INTO points (latitude, longitude, nome, descricao) VALUES (latitude, longitude, nome, descricao);
END;
$BODY$;
------

CREATE OR REPLACE PROCEDURE public.addnewroutesegment(
	IN rotaoid integer,
	IN pontooid_de integer,
	IN pontooid_para integer,
	IN sequencia integer,
	IN instrucoes text)
LANGUAGE 'plpgsql'
AS $BODY$
BEGIN
    INSERT INTO routeSegments (rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes) VALUES (rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes);
END;
$BODY$;
------
CREATE OR REPLACE PROCEDURE public.addnewtrip(
	IN rotaoid integer,
	IN data_partida timestamp without time zone,
	IN data_chegada timestamp without time zone)
LANGUAGE 'plpgsql'
AS $BODY$
BEGIN
    INSERT INTO trips (rotaoid, data_partida, data_chegada) VALUES (rotaoid, data_partida, data_chegada);
END;
$BODY$;

```

## Functions

``` SQL
CREATE OR REPLACE FUNCTION CalculateTotalDistance(rotaid INTEGER) RETURNS FLOAT
LANGUAGE plpgsql
AS $$
DECLARE
    total_distance FLOAT := 0;
BEGIN
    SELECT SUM(distancia) INTO total_distance
    FROM routeSegments rs
    JOIN connections c ON rs.pontooid_de = c.pontooid_de AND rs.pontooid_para = c.pontooid_para
    WHERE rs.rotaoid = rotaid;

    RETURN total_distance;
END;
$$;
----
CREATE OR REPLACE FUNCTION update_timestamp() RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updatedAt = NOW();
    RETURN NEW;
END;
$$;
-----

CREATE OR REPLACE FUNCTION set_timestamps()
RETURNS TRIGGER AS $$
BEGIN
    NEW."createdAt" = COALESCE(NEW."createdAt", NOW());
    NEW."updatedAt" = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


```

## Triggers

``` SQL
CREATE TRIGGER before_insert_or_update_points
BEFORE INSERT OR UPDATE ON points
FOR EACH ROW EXECUTE FUNCTION set_timestamps();

```