'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('points', [
      {
        latitude: -23.55052,
        longitude: -46.633308,
        nome: 'Ponto A',
        descricao: 'Descrição do Ponto A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: -23.55152,
        longitude: -46.634308,
        nome: 'Ponto B',
        descricao: 'Descrição do Ponto B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: -23.55252,
        longitude: -46.635308,
        nome: 'Ponto C',
        descricao: 'Descrição do Ponto C',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('points', null, {});
  }
};
