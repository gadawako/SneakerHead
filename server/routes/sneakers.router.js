const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for sneakers
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in sneaker GET router')
  const sneakerQuery = `
  SELECT * FROM "Sneakers";`;
  pool.query(sneakerQuery)
  .then((results) => {
      res.send(results.rows);
  })
  .catch((error) => {
      console.log('ERROR SNEAKER ROUTER', error)
      res.sendStatus(500)
  })
});

module.exports = router;