const Flight = require('../models/flight')
var Ticket = require('../models/ticket');


module.exports = {
  index,
  show,
  new: newFlight,
  create
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets){
      res.render('flights/show', { title: 'Flight Detail', flight ,tickets});
    })
    
  });
}

function index(req, res) {
    Flight.find({}, function(err, flights){
    res.render('flights/index', { title: 'All Flights', flights }) 
  })
}

function create(req, res) {
    for(let key in req.body){
      if (req.body[key]=== '') {
        delete req.body[key];
      }
  }

   var flight = new Flight(req.body)   
    
   flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new', { title: 'Add Flight' });
      // for now, redirect right back to new.ejs
      res.redirect('flights');
    });
  }

  function newFlight(req, res) { 
     res.render('flights/new', { title: 'Add Flight' })
    }


