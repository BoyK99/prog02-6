const express = require("express");

// Import the mongoose module
const mongoose = require("mongoose");

// Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/recepten";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Create webserver
const app = express();

const receptenRouter = require("./routers/receptenRouter");

// Create route /
app.use("/recepten/", receptenRouter);

// Start webserver on port 8000
app.listen(8000, () => {
    console.log("server rimmomg");
})

