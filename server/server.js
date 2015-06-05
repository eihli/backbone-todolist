var express = require('express');
var app = express();
var mysql = require('mysql');
var sequelize = require('sequelize')
// var connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'bstein33',
//   database: 'mealenders_db'
// });

var connection = mysql.createConnection({
  host: '45.55.244.91',
  user: 'admin',
  password: 'adminPasswordForMySQL',
  database: 'todolist_db'
});

connection.connect();

connection.query('SELECT * FROM tasks', function(err, rows){
  console.log(rows);
});

connection.end(function(err) {
  // The connection is terminated now
});


app.use(express.static('../client', {index: 'app.html'}));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = app.listen(3000, '0.0.0.0', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});