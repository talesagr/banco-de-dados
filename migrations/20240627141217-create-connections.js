'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Connections', {
      conexaooid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pontooid_de: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Points',
          key: 'pontooid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pontooid_para: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Points',
          key: 'pontooid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      distancia: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tempo: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tipo_transporte: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Connections');
  }
};
