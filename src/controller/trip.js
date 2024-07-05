const TripService = require("../services/tripService");

exports.getAllTrips =async (req, res) => {
    try {
        const trips = await TripService.getAllTrips();
        res.json(trips);
    } catch (error){
        console.error(error);
        res.status(500).json({error: error});
    }
}

exports.getTripById = async (req, res) => {
    const tripId = req.params.id
    try {
       const trip = await TripService.getTripById(tripId);
       res.json(trip)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error});
    }
}

exports.addTrip = async (req, res) => {
    const {rotaoid, data_partida,data_chegada} = req.body;
    try {
        const newTrip = await TripService.addTrip({rotaoid, data_partida, data_chegada});
        res.json(newTrip)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error});
    }
}

exports.updateTripById = async (req, res) => {
    const tripId = req.params.id;
    const {rotaoid, data_partida,data_chegada} = req.body;
    try {
        const updatedTrip = await TripService.updateTripById(tripId, {rotaoid, data_partida, data_chegada});
        if (updatedTrip) {
            res.json(updatedTrip)
        } else {
            res.status(404).send("Trip not found");
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error});
    }
}

exports.deleteTripById = async (req, res) => {
    const tripId = req.params.id
    try {
        const deletedTrip = await TripService.deleteTripById(tripId);
        if (deletedTrip) {
            res.json(deletedTrip)
        } else {
            res.status(404).send('Trip not found');
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({error: error});
    }
}