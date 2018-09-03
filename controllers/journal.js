// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// Require Models
var db = require('../models');

// Define routes

router.get('/', loggedIn, function(req, res) {
	db.journal.findAll({
	where: {
	    userId: req.user.id
	}
    }).then(function(userJournals) {
	res.render('journal/journal', {journals: userJournals})
    });
});

router.get('/new', loggedIn, function(req, res) {
	res.render('journal/new');
});

router.post('/', loggedIn, function(req, res) {
    var params = (req.body);
    params.userId = req.user.id;
    db.journal.create(params).then(function(createdJournal) {
	res.send(createdJournal);
    });
   // res.send(params);
    console.log(params);
});

router.get('/:id', loggedIn, function(req, res) {
    db.journal.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(journal) {
        res.render('journal/show', {journal:journal})
    });
});


module.exports = router;