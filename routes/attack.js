var express = require('express');
var router = express.Router();
var attackModel = require('../models/attack')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  attackModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;