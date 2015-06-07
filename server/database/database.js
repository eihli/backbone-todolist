var mysql = require('mysql');
var Sequelize = require('Sequelize');
var sequelize = new Sequelize('todolist_test', 'admin', 'adminPasswordForMySQL', {
  host: '45.55.244.91',
  dialet: 'mysql'
});


// var connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'bstein33',
//   database: 'backbonetodo_db'
// });


var connection = mysql.createConnection({
  host: '45.55.244.91',
  user: 'admin',
  password: 'adminPasswordForMySQL',
  database: 'todolist_test'
});

var List = sequelize.define('list', {
  name: {
    type: Sequelize.STRING(25),
  }
});


var Task = sequelize.define('task', {
  description: {
    type: Sequelize.STRING(150)
  }
});

Task.belongsTo(List);
List.hasMany(Task);


List.sync();
Task.sync();


List.sync().then(function() {
  return List.create({
    name: 'This is a List'
  });
}).then(function() {
  Task.create({
    description: 'This is a task',
    listId: this.id
  });
});

List.findAll({function(err, data) {
  console.log(data);
}});