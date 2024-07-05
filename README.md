
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
CREATE TABLE Points (
    pontooid SERIAL PRIMARY KEY,
    latitude FLOAT NOT NULL CHECK (latitude BETWEEN -90 AND 90),
    longitude FLOAT NOT NULL CHECK (longitude BETWEEN -180 AND 180),
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE Routes (
    rotaoid SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE RouteSegments (
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

CREATE TABLE Connections (
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
CREATE VIEW ActiveRoutes AS
SELECT r.rotaoid, r.nome, r.descricao, COUNT(rs.segmentooid) AS total_segments
FROM Routes r
JOIN RouteSegments rs ON r.rotaoid = rs.rotaoid
GROUP BY r.rotaoid, r.nome, r.descricao;

```

## Procedures

``` SQL
CREATE OR REPLACE PROCEDURE AddNewRoute(nome VARCHAR, descricao TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO Routes (nome, descricao) VALUES (nome, descricao);
END;
$$;

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
    FROM RouteSegments rs
    JOIN Connections c ON rs.pontooid_de = c.pontooid_de AND rs.pontooid_para = c.pontooid_para
    WHERE rs.rotaoid = rotaid;

    RETURN total_distance;
END;
$$;

CREATE OR REPLACE FUNCTION update_timestamp() RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updatedAt = NOW();
    RETURN NEW;
END;
$$;

```

## Triggers

``` SQL

CREATE TRIGGER update_points_timestamp
BEFORE UPDATE ON Points
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_routes_timestamp
BEFORE UPDATE ON Routes
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_routesegments_timestamp
BEFORE UPDATE ON RouteSegments
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_connections_timestamp
BEFORE UPDATE ON Connections
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

```