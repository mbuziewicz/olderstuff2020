var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
  Name:{type:String, required:true},
  Picture:{type:String, required:true},
  description:{type:String, required:true},
  Price:{type:Number, required:true},
  QTY:{type:Number, required:true},
  Type:{type:String, required:true}

},{collection: 'Product'});
module.exports=mongoose.model('Product',schema);


