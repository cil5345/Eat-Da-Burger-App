const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");


router.get("/", function (req, res) {
    burger.selectAll(function (results) {
        let handleBarObject = {
            burgers: results
        };
        console.log(handleBarObject);
        res.render("index", handleBarObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("===============")
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (results) {
        res.json(results)
    });

});

router.put("/api/burgers/:id", function (req, res) {
    let idNumber = "id" + req.params.id;
    console.log(idNumber)
    burger.updateOne("devoured", req.params.id, function (results) {
        res.json(results)
    })

})



module.exports = router;


