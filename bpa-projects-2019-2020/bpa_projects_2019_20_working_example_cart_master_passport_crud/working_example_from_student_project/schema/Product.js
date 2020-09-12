
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  Name:{type:String, required:true},
  Picture:String,
  Price:Number,
  QTY:Number,
  Description:String
},{collection:'Product'});

module.exports = mongoose.model('Product',ProductSchema)