var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/Peak", function(req, res){
    res.render("Peak");
});

app.get("/Mastery", function(req, res){
    res.render("book2");
});

// app.get("/book3", function(req, res){
//     res.render("book3");
// });

// app.get("/book4", function(req, res){
//     res.render("book4");
// });

// app.get("/book5", function(req, res){
//     res.render("book5");
// });



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Wisdom Up!!")
});