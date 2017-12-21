var player = new mongoose.Schema({
	pseudo: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
	password: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
	email: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
	signUpDate: { type: Date, default: Date.now },
	gold: { type: int },
	totalGold: { type: int }

});