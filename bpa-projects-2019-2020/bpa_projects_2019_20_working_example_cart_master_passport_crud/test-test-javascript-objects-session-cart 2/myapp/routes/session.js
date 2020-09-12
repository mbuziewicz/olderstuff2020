var express = require('express');
var router = express.Router();
var session = require('express-session')

// Use the session middleware
router.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

var products = {};

// Access the session as req.session
router.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')

  }
})

module.exports = router;

