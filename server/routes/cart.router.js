const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in post CART router')
    const userId = req.user.id;
    const sneakerId = req.params.id
    const queryText = `INSERT INTO “Shopping Cart” 
    (user_id, sneaker_id)VALUES ($1)`;
    pool.query(queryText, [userId, sneakerId])
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

module.exports = router;