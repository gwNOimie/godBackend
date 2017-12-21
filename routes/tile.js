var express = require('express');
var router = express.Router();
var tileModel = require('../models/tile')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  	tileModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;