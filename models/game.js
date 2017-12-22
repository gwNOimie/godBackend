//imports...
var mongoose = require('mongoose');

var game = new mongoose.Schema({
	turn: { type: Number },
	firstPlayer: { type: String },
	wonPlayer: { type: String },
	startTime: { type: Date, default: Date.now },
	endTime: { type: Date, default: Date.now },
	numberTurn: { type: Number }

});


// Methods
var getList = () => {

}