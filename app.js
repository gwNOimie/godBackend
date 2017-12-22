
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var drones = require('./routes/drones');
var attack = require('./routes/attack');
var elecB = require('./routes/electricityBonus');
var engine = require('./routes/engine');
var exploB = require('./routes/explosiveBonus');
var fireB = require('./routes/fireBonus');
var game = require('./routes/game');
var gear = require('./routes/gear');
var propeller = require('./routes/propeller');
var shield = require('./routes/shield');
var tile = require('./routes/tile');
var weapon = require('./routes/weapon');

var express = require('express');
var app = express();

var db = require('./db');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/attack', attack);
app.use('/drone', drones);
app.use('/electricityBonus', elecB);
app.use('/engine', engine);
app.use('/explosiveBonus', exploB);
app.use('/fireBonus', fireB);
app.use('/game', game);
app.use('/gear', gear);
app.use('/propeller', propeller);
app.use('/shield', shield);
app.use('/tile', tile);
app.use('/users', users);
app.use('/weapon', weapon);


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
