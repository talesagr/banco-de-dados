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
            return await sequelize.query("SELECT * FROM Routes WHERE id = ?", {
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
                "INSERT INTO Routes (nome, descricao) VALUES (?, ?)", 
                {
                    replacements: [nome, descricao] ,
                    type: QueryTypes.INSERT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async updateRouteById(id, { nome, descricao }) {
        try {
            return await sequelize.query(
                "UPDATE Routes SET nome = ?, descricao = ? WHERE id = ?", 
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
            return await sequelize.query("DELETE FROM Routes WHERE id = ?", {
                replacements: [id] ,
                type: QueryTypes.DELETE
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RouteService;
