// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// Require Models
var db = require('../models');

//Define routes

router.get('/', loggedIn, function(req, res) {
	res.send('PUBLIC');
})

module.exports = router;