const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config/database')

class Connection extends Model {}

Connection.init({
    conexaooid:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pontooid_de:{
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    pontooid_para : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    distancia : {
        type:DataTypes.FLOAT,
        allowNull: false,
    },
    tipo_transporte : {
        type: DataTypes.STRING,
        allowNull:false,
    }
},{
        sequelize,
        modelName: 'Connection',
        tableName: 'conexoes',
        timestamps: false,
});

module.exports = Connection;