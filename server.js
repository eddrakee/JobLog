var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var passport     = require('passport');
var session      = require('express-session');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var path         = require('path');
var port         = 8000;

// PASSPORT
// require('./server/config/passport.js')(passport);

app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use(session({ secret: process.env.SESSION_SECRET || 'joblog',
                          resave: false,
                          saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

require("./server/config/mongoose.js");
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log(`JOBLOG - listening to ${port}`)
});
