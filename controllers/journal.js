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
	res.render('journal/journal');
});

router.get('/new', loggedIn, function(req, res) {
	res.render('journal/new');
});

router.post('/', loggedIn, function(req, res) {
	res.send(req.body);
	console.log(req.body);
});

router.get('/:id', loggedIn, function(req, res) {
	res.render('journal/journal');
});


module.exports = router;