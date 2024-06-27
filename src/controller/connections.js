const express = require('express');
const router = express.Router();
const ConnectionModel = require('../services/connectionService');

router.post('/connections', async (req, res) => {
    const { pontooid_de, pontooid_para, distancia, tempo, tipo_transporte } = req.body;

    try {
        const newConnection = await ConnectionModel.addConnection(pontooid_de, pontooid_para, distancia, tempo, tipo_transporte);
        res.json(newConnection);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get('/connections', async (req, res) => {
    try {
        const connections = await ConnectionModel.getAllConnections();
        res.json(connections);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get('/connections/:connectionId', async (req, res) => {
    const connectionId = req.params.connectionId;

    try {
        const connection = await ConnectionModel.getConnectionById(connectionId);

        if (connection) {
            res.json(connection);
        } else {
            res.status(404).send('Conexão não encontrada');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});


router.put('/connections/:connectionId', async (req, res) => {
    const connectionId = req.params.connectionId;
    const {pontooid_de, pontooid_para, distancia, tempo, tipo_transporte } = req.body;

    try {
        const updatedConnection = await ConnectionModel.updateConnectionById(connectionId, {
            pontooid_de : pontooid_de,
            pontooid_para : pontooid_para,
            distancia : distancia,
            tempo : tempo,
            tipo_transporte : tipo_transporte,
        });

        if (updatedConnection) {
            res.json(updatedConnection);
        } else {
            res.status(404).send('Conexao nao encontrada')
        }
    } catch (e) {
        console.log(e);
        req.status(500).send('Erro interno do servidor')
    }
})

router.delete('/connections/:connectionId', async (req, res) => {
    const connectionId = req.params.connectionId;

    try {
        const deletedConnection = await ConnectionModel.deleteConnectionById(connectionId);

        if(deletedConnection){
            res.json(deletedConnection);
        } else {
            res.status(404).send('Conexao nao encontrada')
        }
    }catch ( error){
        console.error(error);
        res.status(500).send('Erro interno de servidor');
    }
})

module.exports = router;
