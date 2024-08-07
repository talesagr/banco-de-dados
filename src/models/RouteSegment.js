const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class RouteSegment extends Model {}

RouteSegment.init({
  segmentooid: {
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
  pontooid_de: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'points',
      key: 'pontooid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  pontooid_para: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'points',
      key: 'pontooid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  sequencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  instrucoes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'RouteSegment',
  tableName: 'routeSegments',
  timestamps: true,
});

module.exports = RouteSegment;
