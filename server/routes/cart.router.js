const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id',(req,res) => {
    // GET route code here 
    console.log('in cart id router GET')
})

module.exports = router;