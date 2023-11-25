const pool = require('../config/database')

class RouteSegmentModel {
    static async getAllRouteSegments(routeId) {
        try {
            const result = await pool.query('SELECT * FROM segmentosRota WHERE rotaoid = $1', [routeId]);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    static async getRouteSegmentById(segmentId) {
        try {
            const result = await pool.query('SELECT * FROM segmentosRota WHERE segmentooid = $1', [segmentId]);

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                return null; 
            }
        } catch (error) {
            throw error;
        }
    }

    static async addRouteSegment(rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes) {
        try {
            const result = await pool.query(
                'INSERT INTO segmentosRota (rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async updateRouteSegmentById(segmentId, {pontooid_de,pontooid_para, sequencia, instrucoes}){
        try {
            const result = await pool.query(
                'UPDATE segmentosRota SET pontooid_de = $1, pontooid_para = $2, sequencia = $3, instrucoes = $4 WHERE segmentooid = $5 RETURNING *',
                [pontooid_de, pontooid_para, sequencia, instrucoes, segmentId]
            );

            return result.rows[0]
        } catch(e){
            throw e;
        }
    }

    static async deleteRouteSegmentById(segmentId){
        try{
            const result = await pool.query(
                'DELETE FROM segmentosRota WHERE segmentooid = $1 RETURNING *',
                [segmentId]
            )

            if(result.rows.length > 0){
                return result.rows[0]
            } else {
                return null;
            }
        } catch (e){
            throw e;
        }
    }
}

module.exports = RouteSegmentModel;