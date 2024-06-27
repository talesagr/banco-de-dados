const Connection = require('../models/Connection')

class ConnectionController {
    static async getAllConnections() {
        try {
            return await Connection.findAll()
        } catch (error) {
            throw error;
        }
    }

    static async getConnectionById(conexaooid) {
        try {
            return await Connection.findByPk(conexaooid)
        } catch (error) {
            throw error;
        }
    }

    static async addConnection(pontooid_de, pontooid_para, distancia, tempo, tipo_transporte) {
        try {
            return await Connection.create({
                pontooid_de,
                pontooid_para,
                distancia,
                tempo,
                tipo_transporte
            })
        } catch (error) {
            throw error;
        }
    }

    static async updateConnectionById(conexaooid, { pontooid_de, pontooid_para, distancia, tempo, tipo_transporte }) {
        try {
            await Connection.update(data,{where:{conexaooid}})

            return await Connection
            .findByPk(conexaooid);
        } catch (error) {
            throw error;
        }
    }

    static async deleteConnectionById(conexaooid) {
        try {
            const conn = await Connection.findByPk(conexaooid);
            if (conn){
                await conn.destroy();
                return true
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ConnectionController;