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

const Drones = mongoose.model('drone', droneSchema);

module.exports = {
	getList: () => {
		return new Promise((resolve, reject) => {
			Drones.find((error, results) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				const values = {};
				for (const key in results) {
					var val = results[key];
					values[val["_id"]] = val["value"]
				}
				resolve(values);
			})
		})
	},
	getItem: (id) => {
		return new Promise((resolve, reject) => {
			Drones.findById((error, result) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				// const values = {};
				// for (const key in result) {
				// 	var val = result[key];
				// 	values[val["_id"]] = val["value"]
				// }
				resolve(rsult);
			})
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