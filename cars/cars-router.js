const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

//Read cars
router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    });
});

//Create car
router.post("/add", (req, res) => {
  const carData = req.body;
  
        db("cars")
          .insert(carData)
          .then(ids => {
            db("cars")
              .where({ id: ids[0] })
              .then(cars => {
                res.status(201).json(cars);
              });
          })
          .catch(err => {
            console.log("POST error", err);
            res.status(500).json({ message: "Failed to store data" });
          });
      
    
});

module.exports = router;
