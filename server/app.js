var express = require('express');
var router = require('./routes.js');
var db = require('./database/database.js');

//Middleware
var morgan = require('morgan'); //used for automated logging of request/response data
var parser = require('body-parser'); // used to parse data out of body
var app = express();

// Set the port we are listening on
app.set("port", 3000);

//Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());




app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/ajax', function(req, res) {
  console.log(req.body);
  res.sendStatus(201);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});