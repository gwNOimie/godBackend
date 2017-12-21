//imports...
var mongoose = require('mongoose');

var attack = new mongoose.Schema({
	damage: { type: int },
	ammo: { type: int },
	cooldown: { type: int },
	aim: { type: int },
	quickFire: { type: boolean },
	source: { type: String }
});

// Methods
var getList = () => {

}