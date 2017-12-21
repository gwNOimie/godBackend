//imports...
var mongoose = require('mongoose');

var gear = new mongoose.Schema({
	cost: { type: Number },
	level: { type: Number },
	source: { type: String },
	name: { type: String },
	description: { type: String }
});

// Methods
var getList = () => {

}