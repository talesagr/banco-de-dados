const express = require('express');
const router = express.Router();
const pointController = require('../controller/points');

router.get('/points', pointController.getAllPoints);
router.get('/points/:id', pointController.getPointById);
router.post('/points', pointController.addPoint);
router.put('/points/:id', pointController.updatePointById);
router.delete('/points/:id', pointController.deletePointById);

module.exports = router