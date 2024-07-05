const {query, QueryTypes} = require("../config/database");
const {sequelize} = require("../models");

class PointService {
    static async getAllPoints() {
        try {
            console.log("AQUI")
            return await sequelize.query("SELECT * FROM Points", { type: QueryTypes.SELECT });
        } catch (error) {
            console.log("PAU AQUI")
            console.log(error)
            throw error;
        }
    }

    static async getPointById(id) {
        try {
            return await sequelize.query("SELECT * FROM Points WHERE pontooid = ?", {
                replacements: [id], 
                type: QueryTypes.SELECT
            });
        } catch (error) {
            throw error;
        }
    }

    static async addPoint({ latitude, longitude, nome, descricao }) {
        try {
            return await sequelize.query(
                "CALL AddNewPoint(:latitude, :longitude, :nome, :descricao)", {
                    replacements: {latitude, longitude, nome, descricao} ,
                    type: QueryTypes.RAW
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async updatePointById(id, { latitude, longitude, nome, descricao }) {
        try {
            return await sequelize.query(
                "UPDATE Points SET latitude = ?, longitude = ?, nome = ?, descricao = ? WHERE pontooid = ?",
                { replacements: [latitude, longitude, nome, descricao, id] }
            );
        } catch (error) {
            throw error;
        }
    }

    static async deletePointById(id) {
        try {
            return await sequelize.query("DELETE FROM Points WHERE pontooid = ?", {
                replacements: [id] 
            });
        } catch (error) {
            throw error;
        }
    }

}

module.exports = PointService;
