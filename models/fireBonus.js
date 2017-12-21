//imports...
var mongoose = require('mongoose');

var fireBonus = new mongoose.Schema({
	damage: { type: int },
	numberTurn: { type: int }
});

// Methods
var getList = () => {

}