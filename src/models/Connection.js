const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Connection extends Model {}

Connection.init({
  conexaooid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pontooid_de: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Point',
      key: 'pontooid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  pontooid_para: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Point',
      key: 'pontooid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  distancia: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tempo: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tipo_transporte: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Connection',
  tableName: 'Connections',
  timestamps: true,
});

module.exports = Connection;
