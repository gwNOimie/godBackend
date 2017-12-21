var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
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


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
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
