var express = require('express');
// var config = require('./config')

var app = express();
module.exports = app;

app.use(express.static('./build'));

var port = 3001;
app.listen(port, function(){
  console.log('Port ' + port + ' is listening.');
});
