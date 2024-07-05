'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Routes', [
      {
        nome: 'Rota 1',
        descricao: 'Descrição da Rota 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Rota 2',
        descricao: 'Descrição da Rota 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Routes', null, {});
  }
};
