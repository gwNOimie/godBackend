var express = require('express');
var router = express.Router();
var elecBModel = require('../models/electricityBonus')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  elecBModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;