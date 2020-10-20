const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for cart
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in cart GET router')
  const cartQuery = `
  SELECT * FROM "Cart";`;
  pool.query(sneakerQuery)
  .then((results) => {
      res.send(results.rows);
      console.log(results)
  })
  .catch((error) => {
      console.log('ERROR SNEAKER ROUTER', error)
      res.sendStatus(500)
  })
});

module.exports = router;
