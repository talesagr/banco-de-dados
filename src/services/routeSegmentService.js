const RouteSegment = require('../models/RouteSegment');

class RouteSegmentService {
    static async getAllRouteSegments() {
        try {
            return await RouteSegment.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getRouteSegmentById(segmentId) {
        try {
            return await RouteSegment.findByPk(segmentId);
        } catch (error) {
            throw error;
        }
    }

    static async addRouteSegment({ rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes }) {
        try {
            return await RouteSegment.create({ rotaoid, pontooid_de, pontooid_para, sequencia, instrucoes });
        } catch (error) {
            throw error;
        }
    }

    static async updateRouteSegmentById(segmentId, { pontooid_de, pontooid_para, sequencia, instrucoes }) {
        try {
            const routeSegment = await RouteSegment.findByPk(segmentId);
            if (routeSegment) {
                await routeSegment.update({ pontooid_de, pontooid_para, sequencia, instrucoes });
                return routeSegment;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    static async deleteRouteSegmentById(segmentId) {
        try {
            const routeSegment = await RouteSegment.findByPk(segmentId);
            if (routeSegment) {
                await routeSegment.destroy();
                return routeSegment;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RouteSegmentService;
