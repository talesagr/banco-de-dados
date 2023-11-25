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

    static async updateConnectionById(conexaooid, { pontooid_de, pontooid_para, distancia, tempo, tipo_transporte }) {
        try {
            const result = await pool.query(
                'UPDATE conexoes SET pontooid_de = $1, pontooid_para = $2, distancia = $3, tempo = $4, tipo_transporte = $5 WHERE conexaooid = $6 RETURNING *',
                [pontooid_de, pontooid_para, distancia, tempo, tipo_transporte, conexaooid]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async deleteConnectionById(conexaooid) {
        try {
            const result = await pool.query('DELETE FROM conexoes WHERE conexaooid = $1 RETURNING *', [conexaooid]);

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

module.exports = ConnectionModel;