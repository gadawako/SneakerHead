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
  console.log(req.body)
  pool.query(addSneakerQuery, [brand,Name,Size,Condition])

  .then((results) => {
      res.send(results.rows);
  })
  .catch((error) => {
      console.log('ERROR IN ADD ROUTER eryhrsdthdfg', error)
      res.sendStatus(500)
  })
});

router.put('/', (req,res) => {
  const userId = req.body.userId
  const updateQuery = `
  UPDATE "Sneakers" 
    SET "sold" = TRUE
    WHERE "id" IN (SELECT sneaker_id FROM "Cart"
    WHERE "user_id"::int = $1)
    RETURNING *
    ;
  `
  const deleteCartQuery = `
  DELETE 
    FROM "Cart" 
    WHERE "user_id" = "user_id"
  `
  console.log(userId)
  pool.query(updateQuery, [userId],)
  .then((results) => {
    res.send(results.rows);
    console.log(results.rows)
  })
  pool.query(deleteCartQuery, [userId])
  .then((results) => {
    console.log(results)
  })
  .catch((error) => {
    console.log("ERROR IN PUT ROUTER", error)
    res.sendStatus(500)
  })
})

module.exports = router;