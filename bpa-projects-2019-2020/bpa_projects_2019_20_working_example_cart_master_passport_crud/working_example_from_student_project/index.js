const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true }, { useUnifiedTopology: true });

//product schema is in schema/product

//var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');

express()
  .use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  //.use('/index', indexRouter)
  .use('/product', productRouter)
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

