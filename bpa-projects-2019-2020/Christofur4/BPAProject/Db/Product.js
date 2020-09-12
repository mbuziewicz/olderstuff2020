var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbadmin:dbpassword1@ds339968.mlab.com:39968/heroku_gv1ggzq2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_gv1ggzq2");
  var myobj = [
    { Name: 'Product1', Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LtGS2u7dIyDXPCSiCSeqwnuicFzct4thbLQOlH2C9UBglaoFcQ',Price:'50.00',QTY:'600',Description:'Stuff'},
   ];
  dbo.collection("Product").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

  
});