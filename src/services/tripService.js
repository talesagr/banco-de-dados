const { query,QueryTypes } = require("sequelize");
const {sequelize} = require("../models");

class TripService {
    static async getAllTrips() {
        try {
            return await sequelize.query("SELECT * FROM trips", { type: QueryTypes.SELECT });
        } catch (error) {
            throw error;
        }
    }

    static async getTripById(tripid) {
        try {
            return await sequelize.query("SELECT * FROM trips WHERE tripid = ?", {
                replacements: [tripid],
                type: QueryTypes.SELECT
            });
        } catch (error) {
            throw error;
        }
    }

    static async addTrip(trip) {
        const { rotaoid, data_partida, data_chegada } = trip;
        try {
            return await sequelize.query(
                "INSERT INTO trips (rotaoid, data_partida, data_chegada, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())",
                {
                    replacements: [rotaoid, data_partida, data_chegada],
                    type: QueryTypes.INSERT
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async updateTripById(tripid, trip) {
        const { rotaoid, data_partida, data_chegada } = trip;
        try {
            return await sequelize.query(
                "UPDATE trips SET rotaoid = ?, data_partida = ?, data_chegada = ?, updatedAt = NOW() WHERE tripid = ?",
                {
                    replacements: [rotaoid, data_partida, data_chegada, tripid],
                    type: QueryTypes.UPDATE
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async deleteTripById(tripid) {
        try {
            return await sequelize.query(
                "DELETE FROM trips WHERE tripid = ?",
                {
                    replacements: [tripid],
                    type: QueryTypes.DELETE
                }
            );
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TripService;
