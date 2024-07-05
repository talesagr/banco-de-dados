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
            return await sequelize.query("SELECT * FROM Points WHERE id = ?", {
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
                "INSERT INTO Points (latitude, longitude, nome, descricao) VALUES (?, ?, ?, ?)", 
                { replacements: [latitude, longitude, nome, descricao] }
            );
        } catch (error) {
            throw error;
        }
    }

    static async updatePointById(id, { latitude, longitude, nome, descricao }) {
        try {
            return await sequelize.query(
                "UPDATE Points SET latitude = ?, longitude = ?, nome = ?, descricao = ? WHERE id = ?", 
                { replacements: [latitude, longitude, nome, descricao, id] }
            );
        } catch (error) {
            throw error;
        }
    }

    static async deletePointById(id) {
        try {
            return await sequelize.query("DELETE FROM Points WHERE id = ?", {
                replacements: [id] 
            });
        } catch (error) {
            throw error;
        }
    }

}

module.exports = PointService;
