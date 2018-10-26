var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/book1", function(req, res){
    res.render("book1");
});