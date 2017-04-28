var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport     = require('passport');
var session      = require('express-session');
var path = require('path');
var port = 8000;

// PASSPORT
require('./server/config/passport.js')(passport);

app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use(session({ secret: 'Joblog secret', name: 'Joblog' }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, function(){
    console.log(`JOBLOG - listening to ${port}`)
});
