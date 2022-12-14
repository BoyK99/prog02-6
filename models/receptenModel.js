// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ReceptenSchema = new Schema({
    title: String,
    recipe : String,
    ingredients: String,
    kitchen: String
});

// Export function to create "Recepten" model class
module.exports = mongoose.model("Recepten", ReceptenSchema);