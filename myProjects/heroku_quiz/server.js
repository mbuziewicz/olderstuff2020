//Install express server


const express = require('express');
const path = require('path');

const app = express();

//The following is probably not needed.  This was added but Asp.net project cors had to be changed and it worked.
var cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname+ '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5001);