const express = require('express');
const router = express.Router();
const reportsController = require('../controller/reports');

router.get('/routes', reportsController.getRoutesByNameAndDescription);
router.get('/points', reportsController.getPointsByLatitudeLongitude);
router.get('/segments', reportsController.getSegmentsByRoute);
router.get('/connections', reportsController.getConnectionsByTransportType);
router.get('/activeRoutes', reportsController.getActiveRoutesWithSegments);
router.get('/trips', reportsController.getTripsByDateRange);
router.get('/totalDistance', reportsController.getTotalDistanceByRoute);
router.get('/detailedRouteSegments', reportsController.getDetailedRouteSegments);

module.exports = router;
