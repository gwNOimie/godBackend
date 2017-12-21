var express = require('express');
var router = express.Router();
var exploBModel = require('../models/explosiveBonus')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  exploBModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;