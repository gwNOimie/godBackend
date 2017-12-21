var express = require('express');
var router = express.Router();
var gameModel = require('../models/game')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  gameModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;