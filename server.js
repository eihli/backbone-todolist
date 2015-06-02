var express = require('express')
  , app = express();

app.use(express.static('public'));

console.log('starting server on port 8080');
app.listen(8080);