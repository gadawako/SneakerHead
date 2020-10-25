const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', (req, res) => {
    console.log('in post CART router', req.body)
    // const userId = req.user.id;
    const sneakerId = req.body.sneakerId
    const userId = req.body.userId
    const queryText = `INSERT INTO "Cart" ("sneaker_id", "user_id")
    VALUES ($1,$2);`;
    pool.query(queryText, [sneakerId, userId])
    .then((results) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('ERROR CART ROUTER', error)
        res.sendStatus(500)
    })
});
    router.delete('/:userId/:sneakerId', (req,res) => {
// delete route code here 
    console.log('delete router', req.params)
    const userId = req.params.userId
    const sneakerId = req.params.sneakerId
    const deleteText = `
    DELETE 
    FROM "Cart" 
    WHERE "user_id"::integer = $1 AND 
    "sneaker_id" = $2;
    `;
    pool.query(deleteText, [userId,sneakerId] )
    .then((results) => {
        res.send(results.rows)
    })
    .catch((error) => {
        console.log( '**** Error in deleting a sneaker router', error)
        res.sendStatus(500);
    })
})

router.get('/:userId', (req, res) => {
    // GET route code here
    console.log('in cart GET router', req.params)
    const userId = req.params.userId
    const cartQuery = `
    SELECT *
    FROM "Sneakers"
    WHERE  "id" IN ( SELECT "sneaker_id" FROM "Cart"
    WHERE "user_id"::integer = $1);`;
    pool.query(cartQuery, [userId] )
    .then((results) => {
        // console.log(results.rows)
        res.send(results.rows);
    })
    .catch((error) => {
        console.log('ERROR SNEAKER ROUTER', error)
        res.sendStatus(500)
    })
  });

module.exports = router;