//Install express server
const express = require('express');
const path = require('path');

const app = express();



app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });


// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/angular5'));

//app.get('/*', function(req,res) {
    
//res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
//res.sendFile('/index.html' , { root : __dirname});
//});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);