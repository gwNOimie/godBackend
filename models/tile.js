//imports...
var mongoose = require('mongoose');

var tile = new mongoose.Schema({
	isEmpty: { type: Boolean },
	imageBackground: { type: String }
});

// Methods
var getList = () => {

}