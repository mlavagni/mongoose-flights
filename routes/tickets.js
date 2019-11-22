var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
// router.get('/flights/:id/tickets', ticketsCtrl.show);
// router.post('/flights/:id/tickets', ticketsCtrl.create);
// router.post('/new', ticketsCtrl.create);


module.exports = router;