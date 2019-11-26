var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    //  new: newTicket,
    create: createFlightTicket,
    delete: deleteTicket
  };


  function deleteTicket(req, res) {
      Ticket.findByIdAndDelete(req.params.id, function(err, ticket) {
        console.log(`deleting: ${ticket}`);
        res.redirect(`/flights/${ticket.flight[0]}`);
      });
  
  }

  function createFlightTicket(req, res) {
    let newTicket = {
      flight :  req.params.id,
      seat : req.body.seat,
      price : req.body.price
    }
    
    Ticket.create(newTicket, function(err, ticket) {
      
      if (err) res.send(err)

      res.redirect(`/flights/${req.params.id}`)
  })
}


  // function newTicket(req, res) {
  //     res.render('tickets/new', {
  //       title: 'Add Ticket',
  //       flightId: req.params.id
      
  //     });

  // }

