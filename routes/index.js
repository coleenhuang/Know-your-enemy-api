var express = require('express');
var router = express.Router();

/* GET list of cards */
router.get('/cards', function(req, res, next){
  res.send('send cards back');
} )

module.exports = router;
