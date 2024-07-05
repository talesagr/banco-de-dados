const ReportService = require('../services/reportService');

exports.getRoutesByNameAndDescription = async (req, res) => {
    const { name, description } = req.query;
    try {
        const routes = await ReportService.getRoutesByNameAndDescription(name, description);
        res.json(routes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getPointsByLatitudeLongitude = async (req, res) => {
    const { latMin, latMax, longMin, longMax } = req.query;
    try {
        const points = await ReportService.getPointsByLatitudeLongitude(latMin, latMax, longMin, longMax);
        res.json(points);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getSegmentsByRoute = async (req, res) => {
    const { routeId } = req.query;
    try {
        const segments = await ReportService.getSegmentsByRoute(routeId);
        res.json(segments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getConnectionsByTransportType = async (req, res) => {
    const { transportType } = req.query;
    try {
        const connections = await ReportService.getConnectionsByTransportType(transportType);
        res.json(connections);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getActiveRoutesWithSegments = async (req, res) => {
    const { minSegments } = req.query;
    try {
        const routes = await ReportService.getActiveRoutesWithSegments(minSegments);
        res.json(routes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getTripsByDateRange = async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const trips = await ReportService.getTripsByDateRange(startDate, endDate);
        res.json(trips);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getTotalDistanceByRoute = async (req, res) => {
    const { routeId } = req.query;
    try {
        const distance = await ReportService.getTotalDistanceByRoute(routeId);
        res.json(distance);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getDetailedRouteSegments = async (req, res) => {
    const { routeId } = req.query;
    try {
        const segments = await ReportService.getDetailedRouteSegments(routeId);
        res.json(segments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};
