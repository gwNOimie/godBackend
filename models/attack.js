var attak = new mongoose.Schema({
	damage: { type: int },
	ammo: { type: int },
	cooldown: { type: int },
	aim: { type: int },
	quickFire: { type: boolean },
	source: { type: String }
});