const express = require('express');
const router = express.Router();
const RouteSegmentModel = require('../services/routeSegmentService');


router.post('/routes/:routeId/segments', async (req, res) => {
    const routeId = req.params.routeId;
    const { pontooid_de, pontooid_para, sequencia, instrucoes } = req.body;

    try {
        const newSegment = await RouteSegmentModel.addRouteSegment(routeId, pontooid_de, pontooid_para, sequencia, instrucoes);
        res.json(newSegment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

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

router.put('/segments/:segmentId', async (req, res) => {
    const segmentId = req.params.segmentId;
    const {pontooid_de, pontooid_para, sequencia,instrucoes} = req.body;

    try {
        const updatedSegment = await RouteSegmentModel.updateRouteSegmentById(segmentId, {
            pontooid_de : pontooid_de,
            pontooid_para : pontooid_para,
            sequencia:sequencia,
            instrucoes:instrucoes,       
        });

        if (updatedSegment){
            res.json(updatedSegment)
        } else {
            res.status(404).send('Segmento de rota nao encontrado')
        }
    } catch ( e){
        console.error(e);
        res.status(500).send('internal server error')
    }
})

router.delete('/segments/:segmentId', async (req, res) => {
    const segmentId = req.params.segmentId;

    try {
        const deletedSegment = await RouteSegmentModel.deleteRouteSegmentById(segmentId);

        if (deletedSegment) {
            res.json(deletedSegment);
        } else {
            res.status(404).send('Segmento de rota não encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;
