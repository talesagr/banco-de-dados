const express = require('express');
const router = express.Router();
const routeController = require('../controller/routes');

router.get('/routes', routeController.getAllRoutes);
router.get('/routes/:id', routeController.getRouteById);
router.post('/routes', routeController.addRoute);
router.put('/routes/:id', routeController.updateRouteById);
router.delete('/routes/:id', routeController.deleteRouteById);

module.exports = router;
