var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');

router.get('/', isLoggedIn, function (req, res, next) {
    //See code at the bottom of this page for isLoggedIn logic
    //if not logged in, go to sign in page
    Product.find({})
    .exec()
    .then(docs => {
        /////res.status(200).json({
        /////    docs
        /////});
        res.render('products_crud/index',{
            products: docs
          });
    })
    .catch(err => {
        console.log(err)
    });
});

/*
router.get("/", (req, res, next) => {
        Product.find({})
            .exec()
            .then(docs => {
                /////res.status(200).json({
                /////    docs
                /////});
                res.render('products_crud/index',{
                    products: docs
                  });
            })
            .catch(err => {
                console.log(err)
            });
    });
  
*/

    //route for add data
    router.post("/add", (req, res, next) => {
    
        const product = new Product({
            _id: mongoose.Types.ObjectId(),
            imagePath: req.body.imagePath,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price 
        });
    
        product.save()
        .then(result => {
            ///res.status(200).json({
            ///    docs:[product],
            ///});
            res.redirect('/crud');
    
        })
        .catch(err => {
            console.log(err);
        });
    });

      //route for update data
     router.post('/update',(req, res) => {
          let product = {};  //create empty object for product updates
          product.title = req.body.title;
          product.description = req.body.description;
          product.price = req.body.price;
          product.imagePath = req.body.imagePath;
        const rid = req.body.product_id;
        let query = {_id: rid}
        console.log(query)
        console.log(product.imagePath)
    
        // Find note and update it with the request body
        Product.updateOne(query, product, function(err) {
            if (err){
                console.log(err);
                return;
            }else{
                res.redirect('/crud');
            }
            });
        
      });
    
    
    router.post("/delete", (req, res, next) => {
        const rid = req.body.product_id2;
        console.log(rid)
        
        Product.findById(rid)
            .exec()
            .then(docs => {
                docs.remove();
                ////res.status(200).json({
                ////    deleted:true
                ////});
                res.redirect('/crud');
            })
            .catch(err => {
                console.log(err)
            });
    });


module.exports = router;

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/');
}