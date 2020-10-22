const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route for sneakers
 */
router.get('/', rejectUnauthenticated, (req, res) => {
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

// req.user.id for extra security
// only users should add/delete etc for their own data
router.post('/', (req, res,) => {
  console.log(req.body.Name)
  const brand = req.body.brand
  const Name = req.body.Name
  const Size = req.body.Size
  const Condition = req.body.Condition
  const addSneakerQuery = `
  INSERT INTO "Sneakers" ("Brand", "Name", "Size", "Condition")
  VALUES ($1, $2, $3, $4) RETURNING *`;
  pool.query(addSneakerQuery, [brand,Name,Size,Condition])

  .then((results) => {
      res.send(results.rows);
  })
  .catch((error) => {
      console.log('ERROR IN ADD ROUTER', error)
      res.sendStatus(500)
  })
});


module.exports = router;