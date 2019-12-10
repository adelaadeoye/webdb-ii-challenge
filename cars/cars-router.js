const express = require('express');
const db = require('../data/db-config');


const router = express.Router();


router.get("/",(req,res)=>{
    db
    .select("*")
    .from("cars")
    .then(cars=>{
        res.status(200).json(cars)
    })
})

module.exports = router;