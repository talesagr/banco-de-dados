'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('RouteSegments', [
      {
        rotaoid: 1,
        pontooid_de: 1,
        pontooid_para: 2,
        sequencia: 1,
        instrucoes: 'Siga pela Rua A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rotaoid: 1,
        pontooid_de: 2,
        pontooid_para: 3,
        sequencia: 2,
        instrucoes: 'Vire à direita na Rua B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rotaoid: 2,
        pontooid_de: 3,
        pontooid_para: 1,
        sequencia: 1,
        instrucoes: 'Siga pela Rua C',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RouteSegments', null, {});
  }
};
