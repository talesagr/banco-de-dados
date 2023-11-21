const express = require('express');
const axios = require('axios');
const router = express.Router();
const PointModel = require('../models/pointModel');
const config = require('../config/apiKey')



router.post('/points', async (req, res) => {
    const {address, name, description} = req.body;

    try {
        const geocodingResponse = 
            await axios
            .get('https://maps.googleapis.com/maps/api/geocode/json', {
                params:{
                    address : address,
                    key: config.googleMapsApiKey,
                },
            });

            const location = geocodingResponse.data.results[0].geometry.location;
            const latitude = parseFloat(location.lat);
            const longitude = parseFloat(location.lng);

            const newPoint = await PointModel.addPoint({
                latitude:latitude,
                longitude:longitude,
                nome:name,
                descricao:description,
            })
            res.json(newPoint)

        } catch (error){
            console.error('Erro ao adicionar ponto:', error.message);
            res.status(500).send('Internal Server Error')
        }
})

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