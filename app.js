var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var mongoose = require('mongoose');



// Connexion URL
var url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connexion succesfully to server");
	db.close
});

mongoose.connect('mongodb://localhost/', function (err) {
	if (err) {
		throw err;

	} else {
		console.log("Connexion succesfully to mongoose");
	}
});

// Model 
var player = new mongoose.Schema({
	pseudo: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
	password: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
	email: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
	signUpDate: { type: Date, default: Date.now },
	gold: { type: int },
	totalGold: { type: int }

});

var game = new mongoose.Schema({
	turn: { type: int },
	firstPlayer: { type: String },
	wonPlayer: { type: String },
	startTime: { type: Date, default: Date.now },
	endTime: { type: Date, default: Date.now },
	numberTurn: { type: int }

});

var tile = new mongoose.Schema({
	isEmpty: { type: boolean },
	imageBackground: { type: String }
});

var drone = new mongoose.Schema({
	life: { type: int },
	actionPoints: { type: int },
	cost: { type: int },
	name: { type: String },
	source: { type: String },
	description: { type: String },
	level: { type: int }
});

var gear = new mongoose.Schema({
	cost: { type: int },
	level: { type: int },
	source: { type: String },
	name: { type: String },
	description: { type: String }
});

var engine = new mongoose.Schema({
	actionPoints: { type: int }

});

var shield = new mongoose.Schema({
	capactity: { type: int },
	block: { type: int }
});

var propeller = new mongoose.Schema({
	speed: { type: int }
});

var wearpn = new mongoose.Schema({
	isPrimary: { type: boolean }
});

var attak = new mongoose.Schema({
	damage: { type: int },
	ammo: { type: int },
	cooldown: { type: int },
	aim: { type: int },
	quickFire: { type: boolean },
	source: { type: String }
});

var fireBonus = new mongoose.Schema({
	damage: { type: int },
	numberTurn: { type: int }
});

var electricityBonus = new mongoose.Schema({
	actionPoints: { type: int }
});

var explosiveBonus = new mongoose.Schema({
	tile: { type: int }
});





app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send('error');
});

module.exports = app;
