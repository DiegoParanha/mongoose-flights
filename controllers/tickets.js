const Ticket = require('../models/ticket')
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
}

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.push(req.body.ticketId);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }

  function create(req, res) {
    req.body.born += 'T00:00';
    Ticket.create(req.body, function (err, ticket) {
      res.redirect('/tickets/new');
    });
  }

//   function newTicket(req, res) {
//     Ticket.find({})
//       //Sort performers by their name
//       .sort('name')
//       .exec(function (err, tickets) {
//         res.render('tickets/new', {
//           title: 'Add Ticket',
//           tickets
//         });
//       });
//   }

function newTicket(res, res) {
    let flightId = req.params.id
    res.render('tickets/new', {
        flightId,
        title: 'Add Ticket'
    });
}