const pool = require('../config/database');

class PointModel {
    static async getAllPoints() {
        try {
            const result = await pool.query('SELECT * FROM pontos');
            return result.rows;
        } catch (error){
            throw error;
        }
    }

    static async getPointById(id) {
        try {
            const result = await pool.query('SELECT * FROM pontos WHERE pontosoid = $1', [id]);
            
            if(result.rows.length > 0){
                return result.rows[0];
            } else {
                return null;
            }
        } catch (error){
            throw error;
        }
    }

    static async addPoint(latitude, longitude, nome, descricao) {
        try {
            const result = await pool.query(
                'INTERT INTO pontos (latitude, longitude, nome, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
                [latitude, longitude,nome,descricao]
            );
            return result.rows[0]
        } catch (error){
            throw error;
        }
    }
}

module.exports = PointModel;