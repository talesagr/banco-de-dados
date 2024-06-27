const Route = require('../models/Route');

class RouteService {
    static async getAllRoutes() {
        try {
            return await Route.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getRouteById(id) {
        try {
            return await Route.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    static async addRoute(nome, descricao) {
        try {
            return await Route.create({ nome, descricao });
        } catch (error) {
            throw error;
        }
    }

    static async updateRouteById(id, { nome, descricao }) {
        try {
            const route = await Route.findByPk(id);
            if (route) {
                await route.update({ nome, descricao });
                return route;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    static async deleteRouteById(id) {
        try {
            const route = await Route.findByPk(id);
            if (route) {
                await route.destroy();
                return route;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RouteService;
