var express = require('express');
var router = express.Router();
var engineModel = require('../models/engine')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  engineModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;