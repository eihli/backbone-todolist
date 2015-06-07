var knex = require('knex')({
  host: '127.0.0.1',
  user: 'root',
  password: 'bstein33',
  database: 'backbonetodo_db',
  charset: 'utf8'
});

exports.bookshelf = require('bookshelf')(knex);

var Task = bookshelf.Model.extend({
  tableName: 'tasks'
});

var List = bookshelf.Model.extend({
  tableName: 'lists'
});

