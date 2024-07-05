const {QueryTypes} = require('sequelize');
const sequelize = require('../config/database');

class ReportService {
    static async getRoutesByNameAndDescription(name, description) {
        try {
            return await sequelize.query(
                'SELECT * FROM routes WHERE nome LIKE :name AND descricao LIKE :description',
                {
                    replacements: { name: `%${name}%`, description: `%${description}%` },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async getPointsByLatitudeLongitude(latMin, latMax, longMin, longMax) {
        try {
            return await sequelize.query(
                'SELECT * FROM points WHERE latitude BETWEEN :latMin AND :latMax AND longitude BETWEEN :longMin AND :longMax',
                {
                    replacements: { latMin, latMax, longMin, longMax },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async getSegmentsByRoute(routeId) {
        try {
            return await sequelize.query(
                'SELECT * FROM routeSegments WHERE rotaoid = :routeId',
                {
                    replacements: { routeId },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async getConnectionsByTransportType(transportType) {
        try {
            return await sequelize.query(
                'SELECT * FROM connections WHERE tipo_transporte = :transportType',
                {
                    replacements: { transportType },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async getActiveRoutesWithSegments(minSegments) {
        try {
            return await sequelize.query(
                'SELECT r.rotaoid, r.nome, r.descricao, COUNT(rs.segmentooid) AS numero_segmentos ' +
                'FROM routes r ' +
                'JOIN routeSegments rs ON r.rotaoid = rs.rotaoid ' +
                'GROUP BY r.rotaoid, r.nome, r.descricao ' +
                'HAVING COUNT(rs.segmentooid) > :minSegments',
                {
                    replacements: { minSegments },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async getTripsByDateRange(startDate, endDate) {
        try {
            return await sequelize.query(
                'SELECT * FROM trips WHERE data_partida BETWEEN :startDate AND :endDate',
                {
                    replacements: { startDate, endDate },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async getTotalDistanceByRoute(routeId) {
        try {
            return await sequelize.query(
                'SELECT CalculateTotalDistance(:routeId) AS total_distance',
                {
                    replacements: { routeId },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async getDetailedRouteSegments(routeId) {
        try {
            return await sequelize.query(
                'SELECT rs.segmentooid, rs.rotaoid, p1.nome AS ponto_de, p2.nome AS ponto_para, rs.sequencia, rs.instrucoes ' +
                'FROM routeSegments rs ' +
                'JOIN points p1 ON rs.pontooid_de = p1.pontooid ' +
                'JOIN points p2 ON rs.pontooid_para = p2.pontooid ' +
                'WHERE rs.rotaoid = :routeId ' +
                'ORDER BY rs.sequencia',
                {
                    replacements: { routeId },
                    type: QueryTypes.SELECT
                }
            );
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ReportService