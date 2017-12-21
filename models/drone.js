const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/godDatabase', { useMongoClient: true });
mongoose.Promise = global.Promise;

const droneSchema = new mongoose.Schema({
	name: { type: String },
	life: { type: Number },
	actionPoints: { type: Number },
	cost: { type: Number },
	source: { type: String },
	description: { type: String },
	level: { type: Number }
});

module.exports = {
	getList: () => {
		return new Promise((resolve, reject) => {
			console.log('getList');
			resolve('getList')
		})
	},
	getItem: () => {
		return new Promise((resolve, reject) => {
			console.log('getItem');
			resolve('getItem')
		})
	},
	addItem: () => {
		return new Promise((resolve, reject) => {
			console.log('addItem');
			resolve('addItem')
		})
	},
	updateItem: () => {
		return new Promise((resolve, reject) => {
			console.log('updateItem');
			resolve('updateI')
		})
	},
	deleteItem: () => {
		return new Promise((resolve, reject) => {
			console.log('deleteItem');
			resolve('deleteI')
		})
	}
}