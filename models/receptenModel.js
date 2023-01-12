// Require Mongoos
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ReceptenSchema = new Schema({
    title: String,
    recipe : String,
    ingredients: String,
    kitchen: String
},
    {
        toJSON: {virtuals: true}
    })

// Add virtual property to each object to include links
ReceptenSchema.virtual('_links').get(
   function () {
       return {
            self: {
                href: `${process.env.BASE_URI}recepten/${this._id}`
            },
            collection: {
                href: `${process.env.BASE_URI}recepten/`
            }
       }
});

// Export function to create "Recepten" model class
module.exports = mongoose.model("Recepten", ReceptenSchema);