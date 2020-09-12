// server.js

var express = require("express");
var app = express();
var port = 5000;


//Creating Router() object
var router = express.Router();
// Provide all routes here, this is for Home page.

//Example 1
//router.get("/",function(req,res){
//  res.json({"message" : "Hello World"});
//});

//Example 2
router.get("/",function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});

//Example 2
router.get("/products",function(req,res){
  res.sendFile(__dirname + "/public/products.html");
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/",router);

//MUST INCLUDE this for CSS file to link.  
app.use(express.static(__dirname + '/public'));

// Listen to this Port

app.listen(port,function(){
  console.log("Live at Port " + port);
});