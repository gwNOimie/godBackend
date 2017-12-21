var express = require('express');
var router = express.Router();
var gearModel = require('../models/gear')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  gearModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;