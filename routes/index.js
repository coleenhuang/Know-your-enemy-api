const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

/* GET list of cards */
router.get('/cards', function(req, res, next){
  queries.getAll()
    .then(function(cards) {
      res.status(200).json(cards);
    })
    .catch(function(error) {
      next(error);
    });
} )

module.exports = router;
