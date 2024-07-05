const {query, QueryTypes} = require("../config/database");
const {sequelize} = require("../models");

class RouteSegmentService {
    static async getAllRouteSegments() {
        try {
            return await sequelize.query("SELECT * FROM RouteSegments", { type: QueryTypes.SELECT });
        } catch (error) {
            throw error;
        }
    }

    static async getRouteSegmentById(segmentId) {
        try {
            return await sequelize.query("SELECT * FROM RouteSegments WHERE id = ?", {
                replacements: [segmentId], 
                type: QueryTypes.SELECT
            });
        } catch (error) {
            throw error;
        }
    }

    static async addRouteSegment( rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes ) {
        try {
            return await sequelize.query(
                "INSERT INTO RouteSegments (rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes) VALUES (?, ?, ?, ?, ?)", 
                { replacements: [rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes] }
            );
        } catch (error) {
            throw error;
        }
    }

    static async updateRouteSegmentById(segmentId, { pontooid_de, pontooid_para, sequencia, instrucoes }) {
        try {
            return await sequelize.query(
                "UPDATE RouteSegments SET pontooid_de = ?, pontooid_para = ?, sequencia = ?, instrucoes = ? WHERE id = ?", 
                { replacements: [pontooid_de, pontooid_para, sequencia, instrucoes, segmentId] }
            );
        } catch (error) {
            throw error;
        }
    }

    static async deleteRouteSegmentById(segmentId) {
        try {
            return await sequelize.query("DELETE FROM RouteSegments WHERE id = ?", {
                replacements: [segmentId] 
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RouteSegmentService;
