var express = require('express');
var router = express.Router();
var Product = require('../schema/product');

/* GET home page. 
router.get('/', function(req, res, next) {
    console.log("here")
 res.redirect('/pages/index');
});

*/

//List Table Data
router.get('/', function(req, res) {
    console.log("here1")
    Product.find(function(err, products) {
      if (err) {
        console.log(err);
      } else {
        res.render('pages/product', { products: products });
        console.log(products);
      }
  }); 
  });


module.exports = router;