const Point = require('../models/Point')

class PointController {
    static async getAllPoints() {
        try {
            return await Point.findAll();
        } catch (error){
            throw error;
        }
    }

    static async getPointById(id) {
        try {
            return await Point.findByPk(id)
        } catch (error){
            throw error;
        }
    }

    static async addPoint({ latitude, longitude, nome, descricao }) {
        try {
            const point = await Point.create({
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                nome, 
                descricao
            })
            return point
        } catch (error) {
            throw error;
        }
    }

    static async updatePointById(id, { latitude, longitude, nome, descricao }) {
        try {
            const point = await Point.findByPk(id)
            if(!point){return null}
            await point.update({
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                nome, 
                descricao
            })
            return point
        } catch (error) {
            throw error;
        }
    }

    static async deletePointById(id) {
        try {
            const point = await Point.findByPk(id);
            if(point){
                await point.destroy()
                return true;
            }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = PointController;
