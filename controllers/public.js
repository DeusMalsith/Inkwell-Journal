// Require express
var express = require('express');

// Declare a new router
var router = express.Router();

// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// Require Models
var db = require('../models');

// Define routes

router.get('/', function(req, res) {
    db.journal.findAll({
    where: {
        public: true
    }
    }).then(function(userJournals) {
    res.render('public/public', {journals: userJournals})
    });
  });

module.exports = router;