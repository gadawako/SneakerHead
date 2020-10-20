const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// PUT TO UPDATE SNEAKERS SIZE
router.put('/:id', (req, res) => {
    // PUT route code here
    console.log('in sneaker PUT router')
    const sneaker = req.body;
    const queryText = `
    UPDATE "Sneakers"
    SET
    "Size" = $1
    WHERE 
    "id" = $1;
    `
    const queryValues = [
      sneakers.size
    ]
    pool.query(queryText, queryValues)
    .then((result) => {
      res.send(results.rows)
    })
    .catch((error) => {
      console.log( 'ERROR with PUT profile', error)
      res.sendStatus(500)
    })

  });
  module.exports = router;