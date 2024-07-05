'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('trips', [
      {
        rotaoid: 1,
        data_partida: new Date('2023-07-01T10:00:00Z'),
        data_chegada: new Date('2023-07-01T12:00:00Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rotaoid: 2,
        data_partida: new Date('2023-07-02T14:00:00Z'),
        data_chegada: new Date('2023-07-02T16:00:00Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('trips', null, {});
  }
};
