//Require .env file's variables
require('dotenv').config();

// Require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var session = require('express-session');
var loggedIn = require('./middleware/loggedIn');

// Declare app variable
var app = express();

// Set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

// Include controllers
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));
app.use('/dashboard', require('./controllers/dashboard'));
app.use('/journal', require('./controllers/journal'));
app.use('/public', require('./controllers/public'));


// Define routes
app.get('/', function(req, res) {
	if (req.user) {
		res.redirect('/journal');
	} else {
		res.redirect('/auth/login');		
	}
});

// Listen on port 3000
app.listen(process.env.PORT || 3000);