// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// Require Models
var db = require('../models');

//Define routes

router.get('/', function(req, res) {
	res.render('public/public');
})

module.exports = router;