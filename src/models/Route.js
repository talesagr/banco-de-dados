const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Route extends Model {}

Route.init({
    rotaoid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Route',
    tableName: 'rotas',
    timestamps: false,
});

module.exports = Route;
