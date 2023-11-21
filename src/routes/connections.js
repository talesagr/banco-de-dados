const express = require('express');
const router = express.Router();
const ConnectionModel = require('../models/connectionModel');

router.get('/connections', async (req, res) => {
    try {
        const connections = await ConnectionModel.getAllConnections();
        res.json(connections);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para obter uma conexão específica por ID
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

module.exports = router;
