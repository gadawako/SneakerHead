const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res,) => {
    console.log('sdbjtnuweli fkbnse lkrghbvw3578bw4i5utbeuthbv3io5v357tvbo')
    const addSneakerQuery = `
    INSERT INTO "Sneakers" ("Brand", "Name", "Size", "Condition")
    VALUES ('$1', '$2', $3, '$4');`;
    pool.query(addSneakerQuery)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        console.log('ERROR IN ADD ROUTER', error)
        res.sendStatus(500)
    })
  });
  
  module.exports = router