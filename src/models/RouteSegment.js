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
            model: 'rotas',  
            key: 'rotaoid'
        }
    },
    pontooid_de: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pontos',  
            key: 'pontooid'
        }
    },
    pontooid_para: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pontos',  
            key: 'pontooid'
        }
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
    tableName: 'segmentosRota',
    timestamps: false,
});

module.exports = RouteSegment;
