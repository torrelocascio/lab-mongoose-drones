const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone.js');


const drones = [
  {
    name: 'Drone 1',
    propellors: 1,
    maxSpeed: 20,
   
  },
  {
    name: 'Drone 2',
    propellors: 2,
    maxSpeed: 25,
  },
  {
    name: 'Drone 3',
    propellors: 3,
    maxSpeed: 30,
  }
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.name)
  });
  mongoose.connection.close();
});