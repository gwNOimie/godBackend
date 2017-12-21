var express = require('express');
var router = express.Router();
var fireBModel = require('../models/fireB')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  fireBModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;