//imports...
var mongoose = require('mongoose');

// model
var users = new mongoose.Schema({
  pseudo: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
  password: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
  email: { type: String, match: /^[a-zA-Z0-9-_]+$/ },
  signUpDate: { type: Date, default: Date.now },
  gold: { type: Number },
  totalGold: { type: Number }

});

var Users = mongoose.model('users', users);

// Methods
var getList = () => {
  Users.find().pretty;
}

var getItem = (res) => {

  //db.restaurants.find({"name": sName}).pretty

  Users.find({ _id: sName }, function (err, result) {
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
    res.render('index', { title: 'Geo', values: values });
  });
}

var addItem = (res) => {

  Users.post(function (req, res) {
    // Nous utilisons le schéma Piscine
    var user = new Users();
    // Nous récupérons les données reçues pour les ajouter à l'objet Piscine
    user.pseudo = req.body.pseudo;
    user.password = req.body.password;
    user.email = req.body.email;
    user.signUpDate = req.body.signUpDate;
    user.gold = req.body.gold;
    user.totalGold = req.body.totalGold;
    // Nous stockons l'objet en base
    user.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.send({ message: 'Bravo,' + user.pseudo + ' est maintenant stockée en base de données' });
    })
  })
}

