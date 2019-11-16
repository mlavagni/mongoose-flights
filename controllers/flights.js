const Flights = require('../models/flight')


module.exports = {
  new: newFlight,
  create
}

function create(req, res) {
   
    // remove whitespace next to commas
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    
   var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

  function newFlight(req, res) {
     res.render('flights/new')
    }


