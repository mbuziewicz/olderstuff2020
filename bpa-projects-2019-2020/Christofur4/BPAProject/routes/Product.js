var express = require('express');
var router = express.Router();
var Product=require('../models/Product');


router.get('/', function(req, res, next) {
    //var successMsg=req.flash('success')[0];
    Product.find(function(err, products){
      console.log("I am here")
    /*  var Numberatatime=[];
      var Size=3;
      for(var i=0;i<docs.length;i+=Size){
        Numberatatime.push(docs.slice(i,i + Size));
      }
    */
   res.render('pages/index', { title: 'Shopping Cart', products: products });
    });
  });

  router.get('/checkout', function(req, res, next) {
    //var successMsg=req.flash('success')[0];
    Product.find(function(err, products){
      console.log("I am here")
    /*  var Numberatatime=[];
      var Size=3;
      for(var i=0;i<docs.length;i+=Size){
        Numberatatime.push(docs.slice(i,i + Size));
      }
    */
   res.render('pages/checkout', { title: 'Shopping Cart', products: products });
    });
  });


  router.get('/product', function(req, res, next) {
    //var successMsg=req.flash('success')[0];
    Product.find(function(err, products){
      console.log("I am here")
    /*  var Numberatatime=[];
      var Size=3;
      for(var i=0;i<docs.length;i+=Size){
        Numberatatime.push(docs.slice(i,i + Size));
      }
    */
   res.render('pages/AllenDbProductPage', { title: 'Shopping Cart', products: products });
    });
  });


  router.get('/signup', function(req, res, next) {
    //var successMsg=req.flash('success')[0];
    Product.find(function(err, products){
      console.log("I am here")
    /*  var Numberatatime=[];
      var Size=3;
      for(var i=0;i<docs.length;i+=Size){
        Numberatatime.push(docs.slice(i,i + Size));
      }
    */
   res.render('pages/SignUpPage', { title: 'Shopping Cart', products: products });
    });
  });
  
  router.get('/contact', function(req, res, next) {
    //var successMsg=req.flash('success')[0];
    Product.find(function(err, products){
      console.log("I am here")
    /*  var Numberatatime=[];
      var Size=3;
      for(var i=0;i<docs.length;i+=Size){
        Numberatatime.push(docs.slice(i,i + Size));
      }
    */
   res.render('pages/ContactPage', { title: 'Shopping Cart', products: products });
    });
  });

  router.get('/modal', function(req, res, next) {
    //var successMsg=req.flash('success')[0];
    Product.find(function(err, products){
      console.log("I am here")
    /*  var Numberatatime=[];
      var Size=3;
      for(var i=0;i<docs.length;i+=Size){
        Numberatatime.push(docs.slice(i,i + Size));
      }
    */
   res.render('pages/modal', { title: 'Shopping Cart', products: products });
    });
  });




  module.exports = router;

  module.exports = router;