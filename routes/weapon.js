var express = require('express');
var router = express.Router();
var weaponModel = require('../models/weapon')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // utiliser 
  weaponModel.getList().then(result => {
    res.send(result);
  })
});

module.exports = router;