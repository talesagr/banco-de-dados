const {query, QueryTypes} = require("../config/database");
const {sequelize} = require("../models");

class RouteService {
    static async getAllRoutes() {
        try {
            return await sequelize.query("SELECT * FROM Routes", { type: QueryTypes.SELECT });
        } catch (error) {
            throw error;
        }
    }

    static async getRouteById(id) {
        try {
            return await sequelize.query("SELECT * FROM Routes WHERE rotaoid = ?", {
                replacements: [id], 
                type: QueryTypes.SELECT
            });
        } catch (error) {
            throw error;
        }
    }

    static async addRoute(nome, descricao) {
        try {
            return await sequelize.query(
                "CALL AddNewRoute(:nome, :descricao)",
                {
                    replacements: {nome, descricao} ,
                    type: QueryTypes.RAW
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async updateRouteById(id, { nome, descricao }) {
        try {
            return await sequelize.query(
                "UPDATE Routes SET nome = ?, descricao = ? WHERE rotaoid = ?",
                { replacements: [nome, descricao, id] ,
                    type: QueryTypes.UPDATE
                    }
            );
        } catch (error) {
            throw error;
        }
    }

    static async deleteRouteById(id) {
        try {
            return await sequelize.query("DELETE FROM Routes WHERE rotaoid = ?", {
                replacements: [id] ,
                type: QueryTypes.DELETE
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RouteService;
