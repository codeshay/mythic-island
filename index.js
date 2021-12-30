// const { respons, response } = require("express");
const express = require("express");
// const { request } = require("http");

//make app an express app
const app = express();

//name the port
const port = process.env.PORT || "3800";

//get ejs working
app.set("view engine", "ejs");

//enable access to the public folder
// app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

app.get("/", (request, response) => {
    response.render("dock");
    // response.send("Welcome to Mythic Island!" + " Go have a look around. If you're lucky you may just find a mythical creature.");    
})

app.get("/boardwalk", (request, response) => {
    response.render("boardwalk");
})

app.get("/boardwalk2", (request, response) => {
    response.render("boardwalk2");
})

app.get("/beach", (request, response) => {
    response.render("beach");
})

app.get("/cove", (request, response) => {
    response.render("cove");
})

app.get("/depart", (request, response) => {
    response.render("depart");
})

app.get("/mountains", (request, response) => {
    response.render("mountains");
})

app.get("/continue", (request, response) => {
    response.render("continue");
})

app.get("/snowy", (request, response) => {
    response.render("snowy");
})

app.get("/rocky", (request, response) => {
    response.render("rocky");
})

app.get("/tourists", (request, response) => {
    response.render("tourists");
})

app.get("/cave", (request, response) => {
    response.render("cave");
})

app.get("/dragon", (request, response) => {
    response.render("dragon");
})

app.get("/woods", (request, response) => {
    response.render("woods");
})

app.get("/left", (request, response) => {
    response.render("left");
})

app.get("/right", (request, response) => {
    response.render("right");
})

app.get("/unicorn", (request, response) => {
    response.render("unicorn");
})

app.get("/mom", (request, response) => {
    response.render("mom");
})

app.get("/lost", (request, response) => {
    response.render("lost");
})

app.get("/fairy", (request, response) => {
    response.render("fairy");
})


//listens to port???
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})