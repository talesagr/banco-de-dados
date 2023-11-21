const express = require('express');
const router = express.Router();
const PointModel = require('../models/pointModel');

router.get('/points', async (req, res) => {
    try{
        const points = await PointModel.getAllPoints();
        res.json(points);
    } catch (error){
        console.error(error);
        res.status(500).send('Erro interno do servidor')
    }
})

router.get('/points/:id', async (req,res) => {
    const pointId = req.params.id;

    try {
        const point = await PointModel.getPointById(pointId);

        if(point){
            res.json(point);
        } else {
            res.status(404).send('Ponto não encontrado')
        }
    } catch (error){
        console.error(error);
        res.status(500).send('Erro interno do servidor')
    }
})

module.exports = router;