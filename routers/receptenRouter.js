// recepten router
const express = require("express");
const router = express.Router();

const ReceptenModel = require("../models/receptenModel")

// Create GET route
router.get("/", async (req, res) => {
    console.log("GET");
    try {
        let recepten = await ReceptenModel.find();
        res.json(recepten);
    } catch {
        res.status(500).send()
    }
})

// Create route for detail
router.get("/:id", (req,res) => {
    // Find(_id)
    console.log("GET");
    res.send(` request for item ${req.params.id}`);
})


// Create POST route
router.post("/", async (req, res) => {
    console.log("POST");

    // Deze info moet uit request komen
    let recept = new ReceptenModel({
        title: "test1",
        recipe: "test1",
        ingredients: "test1",
        kitchen: "test1"
    })

    try {
        await recept.save()
        res.json(recept);
    } catch {
        res.status(500).send()
    }

    // res.send("Yssssss!");
})

// Create DELETE route
router.delete("/", (req,res) => {
    console.log("DELETE");
    res.send("Yssssss!");
})

// Create OPTIONS route
router.options("/", (req,res) => {
    console.log("OPTIONS");
    res.send("Yssssss!");
})

module.exports = router;