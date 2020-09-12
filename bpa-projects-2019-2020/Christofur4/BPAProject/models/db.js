const mongoose = require('mongoose');

mongoose.connect('mongodb://dbadmin:dbpassword1@ds339968.mlab.com:39968/heroku_gv1ggzq2', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./product.model');