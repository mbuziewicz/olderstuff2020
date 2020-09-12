const express = require('express');
var router = express.Router();
//const mongoose = require('mongoose');
//const Product = mongoose.model('Product');

var bodyParser = require('body-parser');
var Product=require('../models/Product');

router.use(bodyParser());

router.get('/', (req, res) => {
    res.render("update/addOrEdit", {
        viewTitle: "Insert Product",
        product: '' 
    });
});


router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var product = new Product();
    product.Name = req.body.Name;
    product.Picture = req.body.Picture;
    product.description = req.body.description;
    product.Price = req.body.Price;
    product.QTY = req.body.QTY;
    product.Type = req.body.Type;
    product.save((err, doc) => {
        if (!err)
            res.redirect('update/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                console.log(err)
                console.log('here123')
                res.render("update/addOrEdit", {
                    viewTitle: "Insert Product",
                    product: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Product.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('update/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("update/addOrEdit", {
                    viewTitle: 'Update Product',
                    product: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Product.find((err, docs) => {
        if (!err) {
            res.render("update/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving product list :' + err);
        }
    });
});

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'Name':
                body['NameError'] = err.errors[field].message;
                break;
            case 'Mobile':
                body['MobileError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("update/addOrEdit", {
                viewTitle: "Update Product",
                product: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/update/list');
        }
        else { console.log('Error in product delete :' + err); }
    });
});

module.exports = router;