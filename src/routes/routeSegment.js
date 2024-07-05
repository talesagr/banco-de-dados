const express = require('express');
const router = express.Router();
const routeSegmentController = require('../controller/routeSegments');

router.get('/routeSegments', routeSegmentController.getAllRouteSegments);
router.get('/routes/:routeId/segments', routeSegmentController.getSegmentByRouteId);
router.get('/segments/:id', routeSegmentController.getRouteSegmentById);
router.post('/routes/:routeId/segments', routeSegmentController.addRouteSegment);
router.put('/segments/:id', routeSegmentController.updateRouteSegmentById);
router.delete('/segments/:id', routeSegmentController.deleteRouteSegmentById);

module.exports = router;
