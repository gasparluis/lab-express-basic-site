const express = require("express");

const app = express();

//FIXME: Make everithing inside public available
app.use(express.static("public"));

//routes
app.get("/home", (request, response) => {
    response.sendFile(__dirname + "/views/home.html")
});

app.get("/works", (request, response) => { // terei de usar no browser http://localhost:3000/cats (o nome que uso aqui é o que utilizo no browser)
    response.sendFile(__dirname + "/views/works.html")
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html")
});

app.get("/photo_gallery", (request, response) => {
    response.sendFile(__dirname + "/views/photo_gallery.html")
});

app.listen(3000, () => console.log("app listening on port 3000"));


//TODO: create an about page route that sends <h1>This is the about page</h1>