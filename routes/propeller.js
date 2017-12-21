var express = require('express');
var router = express.Router();
var propellerModel = require('../models/propeller')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  propellerModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;