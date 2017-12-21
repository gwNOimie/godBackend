var game = new mongoose.Schema({
	turn: { type: int },
	firstPlayer: { type: String },
	wonPlayer: { type: String },
	startTime: { type: Date, default: Date.now },
	endTime: { type: Date, default: Date.now },
	numberTurn: { type: int }

});