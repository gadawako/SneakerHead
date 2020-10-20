const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for cart
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in cart info GET router')
  const sneakerInfoQuery = `
  SELECT ("Brand", "Name","Size", "Condition")
  FROM "Sneakers"
  WHERE  "Sneaker_id" IN ( SELECT "sneaker_id" FROM "Cart" ) ;`;
  pool.query(sneakerInfoQuery)
  .then((results) => {
      res.send(results.rows);
      console.log('we are here',results)
  })
  .catch((error) => {
      console.log('ERROR SNEAKER ROUTER', error)
      res.sendStatus(500)
  })
});

module.exports = router;
