var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');
var Immutable = require('immutable');
var uuid = require('uuid');
var logger = require('morgan');

var app = express();
var port = 3000;

// settings
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// app logic
var list = Immutable.List();

var range = Immutable.Range(0, 100).toJS();

list = range.map(function (i) {
  return {
    id: i,
    uid: uuid.v4()
  }
});

// routes
app.get('/list', function (req, res) {
  res.json(list);
});

app.listen(port);
console.log('server listening on port:', port);
