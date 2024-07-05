'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Connections', [
      {
        pontooid_de: 1,
        pontooid_para: 2,
        distancia: 5.0,
        tempo: 10,
        tipo_transporte: 'Ônibus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pontooid_de: 2,
        pontooid_para: 3,
        distancia: 3.0,
        tempo: 5,
        tipo_transporte: 'Metrô',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Connections', null, {});
  }
};
