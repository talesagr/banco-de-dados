const express = require('express');
const router = express.Router();
const RouteModel = require('../models/routeModel');

router.get('/routes', async (req, res) => {
    try {
        const routes = await RouteModel.getAllRoutes();
        res.json(routes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get('/routes/:id', async (req, res) => {
    const routeId = req.params.id;

    try {
        const route = await RouteModel.getRouteById(routeId);

        if (route) {
            res.json(route);
        } else {
            res.status(404).send('Rota não encontrada');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});


module.exports = router;