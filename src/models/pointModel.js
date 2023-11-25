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
            const result = await pool.query('SELECT * FROM pontos WHERE pontooid = $1', [id]);
            
            if(result.rows.length > 0){
                return result.rows[0];
            } else {
                return null;
            }
        } catch (error){
            throw error;
        }
    }

    static async addPoint({ latitude, longitude, nome, descricao }) {
        try {
            const result = await pool.query(
                'INSERT INTO pontos (latitude, longitude, nome, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
                [parseFloat(latitude), parseFloat(longitude), nome, descricao]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async updatePointById(id, { latitude, longitude, nome, descricao }) {
        try {
            const result = await pool.query(
                'UPDATE pontos SET latitude = $1, longitude = $2, nome = $3, descricao = $4 WHERE pontooid = $5 RETURNING *',
                [parseFloat(latitude), parseFloat(longitude), nome, descricao, id]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async deletePointById(id) {
        try {
            const result = await pool.query('DELETE FROM pontos WHERE pontooid = $1 RETURNING *', [id]);

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = PointModel;