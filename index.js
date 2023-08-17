const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href="http://localhost:3000/98">Take one down, pass it around.</a>
    `);
});

app.get("/:number_of_bottles", (req, res) => {
    let bottles = req.params.number_of_bottles;
    let anchor = "";
    bottles != 0
        ? (anchor = `<a href="http://localhost:3000/${bottles - 1}">Take one down, pass it around.</a>`)
        : (anchor = `<a href="http://localhost:3000/">Start over.</a>`);

    res.send(`<h1>${bottles} Bottles of beer on the wall.</h1>
    ${anchor}
    `);
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
