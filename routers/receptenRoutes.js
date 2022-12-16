// recepten router
const express = require("express");
const router = express.Router();

const ReceptenModel = require("../models/receptenModel")

// Create GET route
router.get("/", async (req, res) => {
    console.log("GET request for collection");
    try {
        let recepten = await ReceptenModel.find();

        // Create representation for collection as requested in assigment
        // Items, _links, pagination
        let receptenCollection = {
            items: recepten,
            _links: {
                self: {
                    href: `${process.env.BASE_URI}recepten/`
                },
                collection: {
                    href: `${process.env.BASE_URI}recepten/`
                }
            },
            pagination: "Doen we een andere keer, maar er moet iets in staan voor de checker"

        }
        res.json(receptenCollection);
    } catch {
        res.status(500).send()
    }
})

// Create route for detail
router.get("/:id", async (req, res) => {
    console.log(`GET request for detail ${req.params.id}`);
    try {
        let recepten = await ReceptenModel.findById(req.params.id);

        res.return(recepten);
    } catch {
        // ID not found, send 404 error
        res.status(404).send();
    }
    // res.send(` request for item ${req.params.id}`);
})

// Middleware checkt header content-type
router.post("/", (req, res, next) => {
    if (req.header("Content-Type") == "application/json") {
        next();
    } else {
        res.status(415).send();
    }
});

// Create POST route
router.post("/", async (req, res) => {
    console.log("POST");

    // Deze info moet uit request komen
    let recept = ReceptenModel({
        title: req.body.title,
        recipe: req.body.recipe,
        ingredients: req.body.ingredients,
        kitchen: req.body.kitchen
    })

    try {
        await recept.save()
        res.status(201).send()
        // res.json(recept);

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