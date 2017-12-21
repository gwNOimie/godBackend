var express = require('express');
var router = express.Router();
var shieldModel = require('../models/shield')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  shieldModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;