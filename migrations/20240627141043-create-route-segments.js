'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RouteSegments', {
      segmentooid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rotaoid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Routes',
          key: 'rotaoid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      sequencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      instrucoes: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('RouteSegments');
  }
};
