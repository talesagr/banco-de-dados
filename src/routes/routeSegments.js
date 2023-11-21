const express = require('express');
const router = express.Router();
const RouteSegmentModel = require('../models/routeSegmentModel');

router.get('/routes/:routeId/segments', async (req, res) => {
    const routeId = req.params.routeId;

    try {
        const segments = await RouteSegmentModel.getAllRouteSegments(routeId);
        res.json(segments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get('/segments/:segmentId', async (req, res) => {
    const segmentId = req.params.segmentId;

    try {
        const segment = await RouteSegmentModel.getRouteSegmentById(segmentId);

        if (segment) {
            res.json(segment);
        } else {
            res.status(404).send('Segmento de rota não encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;
