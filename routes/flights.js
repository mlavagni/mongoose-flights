const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/fights')

/* GET flights/new */
router.get('/new', flightsCtrl.new) 
res.send('respond with a resource');


module.exports = router;
