const express = require('express');
const router = express.Router();
const connectionController = require('../controller/connections');

router.get('/connections', connectionController.getAllConnections);
router.get('/connections/:id', connectionController.getConnectionById);
router.post('/connections', connectionController.addConnection);
router.put('/connections/:id', connectionController.updateConnectionById);
router.delete('/connections/:id', connectionController.deleteConnectionById);

module.exports = router;
