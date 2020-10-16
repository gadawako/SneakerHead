const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for sneakers
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in sneaker router GET')
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

/**
 * POST route template
 */
// router.post('/', (req, res) => {
  // POST route code here
// });

module.exports = router;