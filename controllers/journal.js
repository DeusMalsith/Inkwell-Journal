// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

//Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

//Define routes

router.get('/', loggedIn, function(req, res) {
	res.render('journal/journal');
});

router.get('/new', loggedIn, function(req, res) {
	res.render('journal/new');
});

router.get('/:id', loggedIn, function(req, res) {
	res.render('journal/journal');
});


module.exports = router;