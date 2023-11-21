const pool = require('../config/database')

class ConnectionModel {
    static async getAllConnections() {
        try {
            const result = await pool.query('SELECT * FROM conexoes');
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    static async getConnectionById(conexaooid) {
        try {
            const result = await pool.query('SELECT * FROM conexoes WHERE conexaooid = $1', [conexaooid]);

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                return null; 
            }
        } catch (error) {
            throw error;
        }
    }

    static async addConnection(pontooid_de, pontooid_para, distancia, tempo, tipo_transporte) {
        try {
            const result = await pool.query(
                'INSERT INTO conexoes (pontooid_de, pontooid_para, distancia, tempo, tipo_transporte) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [pontooid_de, pontooid_para, distancia, tempo, tipo_transporte]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ConnectionModel;