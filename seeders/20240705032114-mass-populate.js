'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('points', [
      { latitude: -23.55352, longitude: -46.636308, nome: 'Ponto D', descricao: 'Descrição do Ponto D', createdat: new Date(), updatedat: new Date() },
      { latitude: -20.55452, longitude: -46.637308, nome: 'Ponto E', descricao: 'Descrição do Ponto E', createdat: new Date(), updatedat: new Date() },
      { latitude: -21.12345, longitude: -47.636308, nome: 'Ponto F', descricao: 'Descrição do Ponto F', createdat: new Date(), updatedat: new Date() },
      { latitude: -25.11123, longitude: -48.637308, nome: 'Ponto G', descricao: 'Descrição do Ponto G', createdat: new Date(), updatedat: new Date() },
      { latitude: -43.55352, longitude: -49.636308, nome: 'Ponto H', descricao: 'Descrição do Ponto H', createdat: new Date(), updatedat: new Date() },
      { latitude: -25.55452, longitude: -40.637308, nome: 'Ponto I', descricao: 'Descrição do Ponto I', createdat: new Date(), updatedat: new Date() },
      { latitude: -33.55352, longitude: -43.636308, nome: 'Ponto J', descricao: 'Descrição do Ponto J', createdat: new Date(), updatedat: new Date() },
      { latitude: -13.55452, longitude: -41.637308, nome: 'Ponto K', descricao: 'Descrição do Ponto K', createdat: new Date(), updatedat: new Date() },
    ], {});

    await queryInterface.bulkInsert('routes', [
      { nome: 'Rota 3', descricao: 'Descrição da Rota 3', createdat: new Date(), updatedat: new Date() },
      { nome: 'Rota 4', descricao: 'Descrição da Rota 4', createdat: new Date(), updatedat: new Date() },
      { nome: 'Rota 5', descricao: 'Descrição da Rota 5', createdat: new Date(), updatedat: new Date() },
      { nome: 'Rota 6', descricao: 'Descrição da Rota 6', createdat: new Date(), updatedat: new Date() },
      { nome: 'Rota 7', descricao: 'Descrição da Rota 7', createdat: new Date(), updatedat: new Date() },
      { nome: 'Rota 8', descricao: 'Descrição da Rota 8', createdat: new Date(), updatedat: new Date() },
      { nome: 'Rota 9', descricao: 'Descrição da Rota 9', createdat: new Date(), updatedat: new Date() },

    ], {});

    await queryInterface.bulkInsert('connections', [
      { pontooid_de: 3, pontooid_para: 5, distancia: 2.0, tempo: 5, tipo_transporte: 'Ônibus', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 5, pontooid_para: 5, distancia: 4.0, tempo: 8, tipo_transporte: 'Metrô', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 1, pontooid_para: 3, distancia: 6.0, tempo: 12, tipo_transporte: 'Trem', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 5, pontooid_para: 6, distancia: 10.0, tempo: 1, tipo_transporte: 'Nave', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 1, pontooid_para: 5, distancia: 400.0, tempo: 90, tipo_transporte: 'Carro', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 1, pontooid_para: 5, distancia: 34.0, tempo: 13, tipo_transporte: 'Trem', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 3, pontooid_para: 2, distancia: 1.0, tempo: 7, tipo_transporte: 'Ônibus', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 5, pontooid_para: 3, distancia: 4.0, tempo: 90, tipo_transporte: 'Metrô', createdat: new Date(), updatedat: new Date() },
      { pontooid_de: 3, pontooid_para: 6, distancia: 46.0, tempo: 122, tipo_transporte: 'Trem', createdat: new Date(), updatedat: new Date() },
    ], {});

    await queryInterface.bulkInsert('routeSegments', [
      { rotaoid: 3, pontooid_de: 1, pontooid_para: 3, sequencia: 1, instrucoes: 'Siga pela Rua X', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 3, pontooid_de: 3, pontooid_para: 2, sequencia: 2, instrucoes: 'Vire à direita na Rua Y', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 3, pontooid_de: 2, pontooid_para: 5, sequencia: 3, instrucoes: 'Continue em frente na Rua Z', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 4, pontooid_de: 5, pontooid_para: 6, sequencia: 1, instrucoes: 'Siga pela Avenida A', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 4, pontooid_de: 6, pontooid_para: 1, sequencia: 2, instrucoes: 'Vire à esquerda na Rua B', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 5, pontooid_de: 1, pontooid_para: 5, sequencia: 1, instrucoes: 'Continue em frente na Estrada C', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 6, pontooid_de: 5, pontooid_para: 3, sequencia: 1, instrucoes: 'Siga pela Rua D', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 6, pontooid_de: 3, pontooid_para: 6, sequencia: 2, instrucoes: 'Vire à direita na Avenida E', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 7, pontooid_de: 2, pontooid_para: 5, sequencia: 1, instrucoes: 'Continue em frente na Estrada F', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 8, pontooid_de: 1, pontooid_para: 6, sequencia: 1, instrucoes: 'Siga pela Rua G', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 8, pontooid_de: 6, pontooid_para: 1, sequencia: 2, instrucoes: 'Vire à esquerda na Rua H', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 9, pontooid_de: 1, pontooid_para: 2, sequencia: 1, instrucoes: 'Continue em frente na Estrada I', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 9, pontooid_de: 2, pontooid_para: 3, sequencia: 2, instrucoes: 'Siga pela Rua J', createdat: new Date(), updatedat: new Date() },
      { rotaoid: 9, pontooid_de: 3, pontooid_para: 5, sequencia: 3, instrucoes: 'Vire à direita na Rua K', createdat: new Date(), updatedat: new Date() },
    ], {});

    await queryInterface.bulkInsert('trips', [
      { rotaoid: 3, data_partida: new Date('2024-07-01T08:00:00'), data_chegada: new Date('2024-07-01T12:00:00'), createdat: new Date(), updatedat: new Date() },
      { rotaoid: 3, data_partida: new Date('2024-07-02T09:00:00'), data_chegada: new Date('2024-07-03T03:00:00'), createdat: new Date(), updatedat: new Date() },
      { rotaoid: 4, data_partida: new Date('2024-07-02T10:00:00'), data_chegada: new Date('2024-07-02T22:30:00'), createdat: new Date(), updatedat: new Date() },
      { rotaoid: 5, data_partida: new Date('2024-07-02T11:00:00'), data_chegada: new Date('2024-07-02T23:00:00'), createdat: new Date(), updatedat: new Date() },
      { rotaoid: 6, data_partida: new Date('2024-07-02T12:00:00'), data_chegada: new Date('2024-07-02T19:00:00'), createdat: new Date(), updatedat: new Date() },
      { rotaoid: 2, data_partida: new Date('2024-07-02T13:00:00'), data_chegada: new Date('2024-07-02T20:00:00'), createdat: new Date(), updatedat: new Date() },
      { rotaoid: 4, data_partida: new Date('2024-07-02T14:00:00'), data_chegada: new Date('2024-07-02T23:00:00'), createdat: new Date(), updatedat: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('trips', null, {});
    await queryInterface.bulkDelete('routeSegments', null, {});
    await queryInterface.bulkDelete('connections', null, {});
    await queryInterface.bulkDelete('routes', null, {});
    await queryInterface.bulkDelete('points', null, {});
  }
};
