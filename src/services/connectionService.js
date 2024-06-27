const Connection = require('../models/Connection');

class ConnectionService {
    static async getAllConnections() {
        try {
            return await Connection.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getConnectionById(conexaooid) {
        try {
            return await Connection.findByPk(conexaooid);
        } catch (error) {
            throw error;
        }
    }

    static async addConnection(pontooid_de, pontooid_para, distancia, tempo, tipo_transporte) {
        try {
            return await Connection.create({ pontooid_de, pontooid_para, distancia, tempo, tipo_transporte });
        } catch (error) {
            throw error;
        }
    }

    static async updateConnectionById(conexaooid, data) {
        try {
            const connection = await Connection.findByPk(conexaooid);
            if (connection) {
                await connection.update(data);
                return connection;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    static async deleteConnectionById(conexaooid) {
        try {
            const connection = await Connection.findByPk(conexaooid);
            if (connection) {
                await connection.destroy();
                return connection;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ConnectionService;
