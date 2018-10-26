var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/book1", function(req, res){
    res.render("book1");
});

app.get("/book2", function(req, res){
    res.render("book2");
});

app.get("/book3", function(req, res){
    res.render("book3");
});

app.get("/book4", function(req, res){
    res.render("book4");
});

app.get("/book5", function(req, res){
    res.render("book5");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Wisdom Up!!")
});