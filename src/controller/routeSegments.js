const RouteSegmentService = require('../services/routeSegmentService');


exports.addRouteSegment = async (req, res) => {
    const routeId = req.params.routeId;
    const { pontooid_de, pontooid_para, sequencia, instrucoes } = req.body;

    try {
        const newSegment = await RouteSegmentService.addRouteSegment(routeId, pontooid_de, pontooid_para, sequencia, instrucoes);
        res.json(newSegment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getAllRouteSegments = async (req, res) => {
    const routeId = req.params.routeId;

    try {
        const segments = await RouteSegmentService.getAllRouteSegments(routeId);
        res.json(segments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};



exports.getRouteSegmentById = async (req, res) => {
    const segmentId = req.params.segmentId;

    try {
        const segment = await RouteSegmentService.getRouteSegmentById(segmentId);

        if (segment) {
            res.json(segment);
        } else {
            res.status(404).send('Segmento de rota não encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.updateRouteSegmentById = async (req, res) => {
    const segmentId = req.params.segmentId;
    const {pontooid_de, pontooid_para, sequencia,instrucoes} = req.body;

    try {
        const updatedSegment = await RouteSegmentService.updateRouteSegmentById(segmentId, {
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
}

exports.deleteRouteSegmentById = async (req, res) => {
    const segmentId = req.params.segmentId;

    try {
        const deletedSegment = await RouteSegmentService.deleteRouteSegmentById(segmentId);

        if (deletedSegment) {
            res.json(deletedSegment);
        } else {
            res.status(404).send('Segmento de rota não encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};