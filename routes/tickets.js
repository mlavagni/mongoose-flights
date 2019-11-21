var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets', ticketsCtrl.new);
// router.get('/flights/:id/tickets', ticketsCtrl.show);
router.post('/flights/:id/tickets', ticketsCtrl.create);


module.exports = router;