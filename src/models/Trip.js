const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Trip extends Model {}

Trip.init({
  tripid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rotaoid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'routes',
      key: 'rotaoid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  data_partida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_chegada: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Trip',
  tableName: 'trips',
  timestamps: true,
});

module.exports = Trip;
