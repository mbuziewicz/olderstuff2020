var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { Name: 'Prodcut1', Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LtGS2u7dIyDXPCSiCSeqwnuicFzct4thbLQOlH2C9UBglaoFcQ',Price:'50.00',PriceTotal:'Stuff'},
   ];
  dbo.collection("ShoppingCart").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

  
});