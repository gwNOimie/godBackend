//imports...
var mongoose = require('mongoose');

// model
var users = new mongoose.Schema({
  pseudo: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
  password: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
  email: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
  signUpDate: { type: Date, default: Date.now },
  gold: { type: int },
  totalGold: { type: int }

});

var Users = mongoose.model('users',users);

// Methods
var getList = () => {

}

var getItem = (res) => {
	//db.restaurants.find({"name": sName}).pretty

	Users.find({_id:'x'},function(err, result) {
            if (err) {
                console.log(err);
                res.send('database error');
                return
            }
            var values = {};
            for (var i in result) {
                var val = result[i];
                values[val["_id"]] = val["value"]
            }
            res.render('index', {title: 'Geo', values: values});
    });
}

