// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

//Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

//Define routes

router.get('/', loggedIn, function(req, res) {
	res.send('DASHBOARD');
})

module.exports = router;