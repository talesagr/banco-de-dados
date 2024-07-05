const ConnectionService = require('../services/connectionService');

exports.getAllConnections = async (req, res) => {
    try {
        const connections = await ConnectionService.getAllConnections();
        res.status(200).json(connections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getConnectionById = async (req, res) => {
    try {
        const connection = await ConnectionService.getConnectionById(req.params.id);
        if (connection) {
            res.status(200).json(connection);
        } else {
            res.status(404).json({ message: 'Connection not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addConnection = async (req, res) => {
    try {
        const { pontooid_de, pontooid_para, distancia, tempo, tipo_transporte } = req.body;
        const newConnection = await ConnectionService.addConnection({ pontooid_de, pontooid_para, distancia, tempo, tipo_transporte });
        res.status(201).json(newConnection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateConnectionById = async (req, res) => {
    try {
        const connection = await ConnectionService.getConnectionById(req.params.id);
        if (connection) {
            await ConnectionService.updateConnectionById(req.body);
            res.status(200).json(connection);
        } else {
            res.status(404).json({ message: 'Connection not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteConnectionById = async (req, res) => {
    try {
        const connection = await ConnectionService.getConnectionById(req.params.id);
        if (connection) {
            await ConnectionService.deleteConnectionById(req.params.id);
            res.status(200).json({ message: 'Connection deleted successfully' });
        } else {
            res.status(404).json({ message: 'Connection not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
