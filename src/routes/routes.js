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
router.post('/routes', async (req, res) => {
    const { nome, descricao } = req.body;

    try {
        const newRoute = await RouteModel.addRoute(nome,descricao);
        res.json(newRoute);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.put('/routes/:id', async (req, res) => {
    const routeId = req.params.id;
    const { nome, descricao } = req.body;

    try {
        const updatedRoute = await RouteModel.updateRouteById(routeId,{
            nome : nome,
            descricao: descricao,
        });

        if(updatedRoute){
            res.json(updatedRoute)
        } else {
            res.status(404).send('Rota nao encontrada')
        }
    } catch (e){
        console.error(e);
        res.status(500).send('Internal Server Error')
    }
});

router.delete('/routes/:id', async (req, res) => {
    const routeId = req.params.id;

    try {
        const deletedRoute = await RouteModel.deleteRouteById(routeId);

        if(deletedRoute){
            res.json(deletedRoute)
        } else {
            res.status(404).send('Rota nao encontrada')
        }
    } catch(e){
        console.error(e);
        res.status(500).send('Internal Server Error')
    }
})


module.exports = router;