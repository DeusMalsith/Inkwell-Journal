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

router.get('/edit/:id', loggedIn, function(req, res) {
    db.journal.findById(req.params.id).then(function(foundJournal) {
        res.render('journal/edit', {journal: foundJournal})
    });
});

router.put('/edit/:id', loggedIn, function(req, res) {
    db.journal.findById(req.params.id).then(function(foundJournal) {
        foundJournal.title = req.body.title;
        foundJournal.content = req.body.content;
        foundJournal.save();
    }).then(function(updatedJournal) {
        res.send(req.params.id);
    });
});

router.post('/', loggedIn, function(req, res) {
    var params = (req.body);
    params.userId = req.user.id;
    db.journal.create(params).then(function(createdJournal) {
    res.redirect('/journal/' + createdJournal.id);
    });
});

router.get('/:id', function(req, res) {
    if (loggedIn) {
        db.journal.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function(journal) {
                res.render('journal/show', {journal:journal})
            });
    } else {
        db.journal.findOne({
                where: {
                    id: req.params.id,
                    public: true
                }
            }).then(function(journal) {
                res.render('journal/show', {journal:journal})
            });
    }
});

// router.get('/:id', loggedIn, function(req, res) {
//     db.journal.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then(function(journal) {
//         res.render('journal/show', {journal:journal})
//     });
// });

router.delete('/:id', loggedIn, function(req, res) {
//    console.log('hello');
    db.journal.destroy({
    where: {
        id: req.params.id
    }
    }).then(function(result) {
    res.send("success!");
    });
});

module.exports = router;