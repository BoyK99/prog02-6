console.log("Graphic design is my passion");

const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Yssssss!")
});

app.listen(8000, () => {
    console.log("server rimmomg");
})