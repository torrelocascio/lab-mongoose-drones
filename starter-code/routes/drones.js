const express = require('express');
const Drone = require('../models/drone')


const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) { return next(err); }

    res.render('drones/index', {
      drones: drones
    });
});
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new')
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    name: req.body.name,
    propellors: req.body.propellors,
    maxSpeed: req.body.maxSpeed
  }
  const newDrone = new Drone(droneInfo)
  newDrone.save( (err) => {
    if (err) { 
      return next(err) 
    }
    return res.redirect('/drones');
});
});


module.exports = router;
