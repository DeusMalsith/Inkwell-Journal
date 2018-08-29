// Require express
var express = require('express');
var passport = require('../config/passportConfig');

// Include the models
var db = require('../models');

// Declare a new router
var router = express.Router();

//Define routes
router.get('/login', function(req, res) {
	res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	successFlash: 'Login successful',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid credentials'
}));

router.get('/signup', function(req, res) {
	res.render('auth/signup');
});

router.post('/signup', function(req, res) {
	console.log(req.body);
	req.body.admin = false;
	db.user.findOrCreate({
		where: {email:req.body.email},
		defaults: req.body
	}).spread(function(user, wasCreated) {
		if(wasCreated) { // This is expected behavior
			// Automatically log the user in
			passport.authenticate('local', {
				successRedirect: '/profile',
				successFlash: 'Successfully logged in!',
				failureRedirect: '/',
				failureFlash: 'BIG PROBLEM MY GUY!'
			})(req, res);
		} else { // User already has a login
			req.flash('error', 'Please login');
			res.redirect('/auth/login');
		}
	}).catch(function(err) {
		req.flash('error', err.message)
		res.redirect('/auth/signup');
	});
});

router.get('/logout', function(req, res) {
	req.logout();
	req.flash('success', 'Logout successful!');
	res.redirect('/');
});

module.exports = router;