const {query, QueryTypes} = require("../config/database");
const {sequelize} = require("../models");

class ConnectionService {
    static async getAllConnections() {
        try {
            return await sequelize.query("SELECT * FROM Connections", { type: QueryTypes.SELECT });
        } catch (error) {
            throw error;
        }
    }

    static async getConnectionById(conexaooid) {
        try {
            return await sequelize.query("SELECT * FROM Connections WHERE conexaooid = ?", {
                replacements: [conexaooid], 
                type: QueryTypes.SELECT
            });
        } catch (error) {
            throw error;
        }
    }

    static async addConnection(pontooid_de, pontooid_para, distancia, tempo, tipo_transporte) {
        try {
            return await sequelize.query(
                "INSERT INTO Connections (pontooid_de, pontooid_para, distancia, tempo, tipo_transporte) VALUES (?, ?, ?, ?, ?)", {
                    replacements: [pontooid_de, pontooid_para, distancia, tempo, tipo_transporte] ,
                    type: QueryTypes.INSERT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async updateConnectionById(conexaooid, data) {
        try {
            return await sequelize.query(
                "UPDATE Connections SET pontooid_de = ?, pontooid_para = ?, distancia = ?, tempo = ?, tipo_transporte = ? WHERE conexaooid = ?",
                { replacements: [data.pontooid_de, data.pontooid_para, data.distancia, data.tempo, data.tipo_transporte, conexaooid] }
            );
        } catch (error) {
            throw error;
        }
    }

    static async deleteConnectionById(conexaooid) {
        try {
            return await sequelize.query("DELETE FROM Connections WHERE conexaooid = ?", {
                replacements: [conexaooid] 
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ConnectionService;
