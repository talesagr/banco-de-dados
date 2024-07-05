const axios = require('axios');
const PointService = require('../services/pointService');
const config = require('../config/apiKey')

exports.addPoint= async (req, res) => {
    const { latitude,longitude, nome, descricao } = req.body;

    try {
        const newPoint = await PointService.addPoint({
            latitude: latitude,
            longitude: longitude,
            nome: nome,  
            descricao: descricao,
        });

        res.json(newPoint);
    } catch (error) {
        console.error('Erro ao adicionar ponto:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

exports.getAllPoints= async (req, res) => {
    try{
        const points = await PointService.getAllPoints();
        res.json(points);
    } catch (error){
        console.error(error);
        res.status(500).send('Erro interno do servidor')
    }
}

exports.getPointById= async (req, res) => {
    const pointId = req.params.id;

    try {
        const point = await PointService.getPointById(pointId);

        if(point){
            res.json(point);
        } else {
            res.status(404).send('Ponto não encontrado')
        }
    } catch (error){
        console.error(error);
        res.status(500).send('Erro interno do servidor')
    }
}

exports.updatePointById= async (req, res) => {
    const pointId = req.params.id;
    const { latitude, longitude, nome, descricao } = req.body;

    try {
        const updatedPoint = await PointService.updatePointById(pointId, {
            latitude: latitude,
            longitude: longitude,
            nome: nome,
            descricao: descricao,
        });

        if (updatedPoint) {
            res.json(updatedPoint);
        } else {
            res.status(404).send('Ponto não encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
}


exports.deletePointById= async (req, res) => {
    const pointId = req.params.id;

    try {
        const deletedPoint = await PointService.deletePointById(pointId);

        if (deletedPoint) {
            res.json(deletedPoint);
        } else {
            res.status(404).send('Ponto não encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};