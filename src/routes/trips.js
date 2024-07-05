const express = require('express');
const router = express.Router();
const tripController = require('../controller/trip.js');

router.get('/trips', tripController.getAllTrips)
router.get('/trips/:id', tripController.getTripById)
router.post('/trips', tripController.addTrip)
router.put('/trips/:id', tripController.updateTripById)
router.delete('/trips/:id', tripController.deleteTripById)

module.exports = router;