//imports...
var mongoose = require('mongoose');

var tile = new mongoose.Schema({
	isEmpty: { type: boolean },
	imageBackground: { type: String }
});

// Methods
var getList = () => {

}