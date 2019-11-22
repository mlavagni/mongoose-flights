var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
     new: newTicket,
    create: createFlightTicket
  };

  function createFlightTicket(req, res) {
    console.log('entro al create ticket')
    let newTicket = {
      flight :  req.params.id,
      seat : req.body.seat,
      price : req.body.price
    }
    
    Ticket.create(newTicket, function(err, ticket) {
      
      if (err) res.send(err)
      console.log('req.params.id')
      console.log(req.body)
      res.redirect(`/flights/${req.params.id}`)

    // Flight.findById(req.params.id, function(err, flight) {
    //     req.body.flight = flight
      
    //     Ticket.create(req.body, function(err, ticket) {
    //     ticket.save(function(err) {
    //     res.redirect(`/flights/${flight._id}`)
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

