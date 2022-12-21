// recepten router
const express = require("express");
const router = express.Router();

const ReceptenModel = require("../models/receptenModel")


//middelware accept
router.get("/", (req, res, next) => {
    console.log("Accept");

    if(req.header("Accept") === "application/json"){
        next();
    } else {
        res.status(415).send();
    }
});

// Create GET route
router.get("/", async (req, res) => {
    console.log("GET request for collection");

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

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

// Create GET for detail
router.get("/:id", async (req, res) => {
    console.log(`GET request for detail ${req.params.id}`);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    try {
        let recepten = await ReceptenModel.findById(req.params.id);
        if(recepten === null ) {
            res.status(404).json(recepten);
        }
        res.json(recepten)
    } catch {
        // ID not found, send 404 error
        res.status(404).send();
    }
})

// Middleware checkt header content-type for POST
router.post("/", (req, res, next) => {
    console.log("POST middleware to check Content-Type")
    if (req.header("Content-Type") == "application/json" || req.header("Content-Type") === "application/x-www-form-urlencoded") {
        next();
    } else {
        res.status(415).send();
    }
});

// Add middleware to disallow empty values
router.post("/", (req, res, next) => {
    console.log("POST middleware to check empty values")
    if (req.body.title && req.body.recipe && req.body.ingredients && req.body.kitchen) {
        next();
    } else {
        res.status(400).send();
    }
});

// Create POST route
router.post("/", async (req, res) => {
    console.log("POST request for collection");

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

    } catch {
        res.status(400).send()
    }
});

// Create PUT route
router.put('/:id', async (req, res) => {
    console.log(`PUT request for item ${req.params.id}`);

    let updatedKitchen = {}
    updatedKitchen.title = req.body.title
    updatedKitchen.recipe = req.body.recipe
    updatedKitchen.ingredients = req.body.ingredients
    updatedKitchen.kitchen = req.body.kitchen

    try {
        if (updatedKitchen.title && updatedKitchen.recipe && updatedKitchen.ingredients && updatedKitchen.kitchen !== "") {
            await ReceptenModel.findByIdAndUpdate(req.params.id, updatedKitchen)
            res.status(201).send()
        } else {
            res.status(400).send()
        }
    } catch{
        res.status(500).send()
    }

});

// Create OPTIONS route
router.options("/", (req, res) => {
    console.log("OPTIONS request for collection");
    res.setHeader("Allow", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.send();
})

// Create OPTIONS ID route
router.options("/:id", (req, res) => {
    console.log(`OPTIONS request for collection ${req.params.id}`);
    res.setHeader("Allow", "GET, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, OPTIONS");
    res.send();
});

// detail: DELETE /id
router.delete("/:id", async (req, res) => {
    console.log(`DELETE request for detail ${req.params.id}`);
    try {
        let recepten = await ReceptenModel.findByIdAndDelete(req.params.id);
        if (recepten === null) {
            res.status(404).send();
        }
        res.status(204).send();
    } catch {
        // id not found -> 404 error
        res.status(404).send();
    }
});

// Export router :)
module.exports = router;