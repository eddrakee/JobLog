var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 8000;

app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());

app.listen(port, function(){
    console.log(`JOBLOG - listening to ${port}`)
});
