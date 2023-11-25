
Exemplo de JSON para a tabela "conexoes" (connections):

URL : localhost:5000/api/connections

{
  "pontooid_de": 1,
  "pontooid_para": 2,
  "distancia": 5.0,
  "tempo": 10,
  "tipo_transporte": "Ônibus"
}

Exemplo de JSON para a tabela "rotas" (routes):

URL : localhost:5000/api/routes

{
  "nome": "Rota ...",
  "descricao": "Descrição da Rota ..."
}

Exemplo de JSON para a tabela "segmentosRota" (routeSegments):

URL : localhost:5000/api/routes/:ROTAOID/segments

{
  "pontooid_de": 1,
  "pontooid_para": 2,
  "sequencia": 1,
  "instrucoes": "Siga pela Rua A"
}