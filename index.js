const express = require("express");
const bodyParser = require('body-parser')

// Load env file
require('dotenv').config()

// Import the mongoose module
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

// Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/recepten";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Create webserver
const app = express();

// Use bodyparser middleware to parse x-form-www-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// Use bodyparser middleware to parse json data
app.use(bodyParser.json({type: 'application/json'}));

// Create route endpoint and conenct to recepten router
app.use("/recepten/", require("./routers/receptenRoutes"));

// Start webserver on port 8000
app.listen(8000, () => {
    // console.log("server rimmomg");
    console.log("Server is running on", process.env.BASE_URI);
})

