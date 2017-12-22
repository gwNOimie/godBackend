//imports...
var mongoose = require('mongoose');

var attak = new mongoose.Schema({
	damage: { type: Number },
	ammo: { type: Number },
	cooldown: { type: Number },
	aim: { type: Number },
	quickFire: { type: Boolean },
	source: { type: String }
});

// Methods
var getList = () => {

}