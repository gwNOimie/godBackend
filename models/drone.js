var drone = new mongoose.Schema({
	life : {type : int},
	actionPoints : {type : int},
	cost : {type : int },
	name : {type : String},
	source : {type : String},
	description : {type : String},
	level : {type : int}
});