const express = require('express');
const knex = require('../db/knex');
const router = express.Router();
const queries = require('../db/queries');
const numberGenerator = require('../numberGenerator');

/* GET list of cards */
router.get('/cards', function(req, res, next){
  if(!req.query.sets) {
    queries.getAll()
    .then(function(cards) {
      res.status(200).json(cards);
    })
    .catch(function(error) {
      next(error);
    });
  }
  else {
    //FIXME: Fails test
    let sets = numberGenerator.randomSetNumbers(req.query.sets)
    queries.getNumberCards(sets)
    .then(cards => {
      res.status(200).json(cards);
    })
    .catch(function(error) {
      next(error);
    });
  }
  
} )

module.exports = router;