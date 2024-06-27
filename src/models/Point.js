const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config/database')

class Point extends Model {}

Points.init({
    pontooid:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao : {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Point',
    tableName: 'pontos',
    timestamps: false,
})


module.exports = Point;