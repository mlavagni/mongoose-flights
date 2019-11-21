var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
     new: newTicket,
    create: createFlightTicket
  };

  function createFlightTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        req.body.flight.push(flight)
        Ticket.create(req.body, function(err, ticket) {
        ticket.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
        })
     })
  })
}

//   function create(req, res) {

//       var t = req.body.born;
//       req.body.born = 
//         `${s.substr(5,2)}-${s.substr(8,2)}-${s.substr(0,4)}`;
//       Performer.create(req.body, function(err, performer) {
//         res.redirect('/performers/new');
//       });
//     }

  function newTicket(req, res) {
    // Ticket.find({}, function(err, tickets) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        flightId: req.params.id
        //tickets
      });
    //})
  }