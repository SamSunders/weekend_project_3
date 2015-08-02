//var express = require('express');
//var app = express();
//
//var path = require('path');
//
//app.set('port', (process.env.PORT || 5000));
//
//app.get('/', function(req, res){
//    res.sendFile(path.join(__dirname, "./public/views/index.html"));
//});
//
//app.listen(app.get('port'), function(){
//    console.log("Server is Up, Listening on port " + app.get('port'));
//});

var express = require('express');
var path = require('path');
var peopleData = require("./public/data/people.json");

var app = express();

app.set("port", (process.env.PORT || 5000)); //sets heroku url

app.get('/data/', function(req, res){
    res.json(peopleData);//sends JSON response to client app.js
});

app.get("/*", function(req,res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));//gives html file
});

app.listen(app.get("port"), function(){
    console.log("Listening on Port: " + app.get("port"));
});