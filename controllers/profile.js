// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

//Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// Require Models
var db = require('../models');

//Define routes
router.get('/', loggedIn, function(req, res) {
	res.render('profile/index');
});

router.get('/edit', loggedIn, function(req, res) {
    db.user.findOne({
	where: { id: req.user.id }}
	).then(function(user) {
	    res.render('profile/edit', {userData:user});
	});
});

router.put('/edit', loggedIn, function(req, res) {
    db.user.update({
	firstname: req.body.firstname,
	lastname: req.body.lastname,
	email: req.body.email
    },
	{ where: { id: req.user.id }}
	).then(function(result) {
	res.send(result);
    });
});

module.exports = router;