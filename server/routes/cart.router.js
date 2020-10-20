const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/:id', (req, res) => {
    console.log('in post CART router')
    // const userId = req.user.id;
    const sneakerId = req.params.id
    const queryText = `INSERT INTO "Cart" ("sneaker_id")
    VALUES ($1);`;
    pool.query(queryText, [sneakerId])
    .then((results) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('ERROR CART ROUTER', error)
        res.sendStatus(500)
    })
});

router.get('/:id',(req,res) => {
    // GET route code here 
    console.log('in cart id router GET')
})

router.get('/', (req, res) => {
    // GET route code here
    console.log('in cart GET router')
    const cartQuery = `
    SELECT ("Brand", "Name","Size", "Condition")
    FROM "Sneakers"
    WHERE  "id" IN ( SELECT "sneaker_id" FROM "Cart" ) ;`;
    pool.query(cartQuery)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        console.log('ERROR SNEAKER ROUTER', error)
        res.sendStatus(500)
    })
  });

module.exports = router;