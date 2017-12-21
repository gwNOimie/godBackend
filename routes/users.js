var express = require('express');
var router = express.Router();
var usersModel = require('../models/users')

/* GET users listing. */
router.get('/user', function (req, res, next) {
  // utiliser 
  usersModel.getList().then(result => {
    res.send(result);
  })

});

router.post('/add_user', function(req, res, next) {
	usersModel.addItem().then(result => {
		res.send(result);
	})
});

module.exports = router;
