var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

// router.get('/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
// router.delete('/:id/', ticketsCtrl.delete);
router.delete('/tickets/:id/', ticketsCtrl.delete);


module.exports = router;