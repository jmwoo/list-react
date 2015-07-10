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
var data = {};

data.list = Immutable.Range(0, 100).map(function (i) {
  return {
    id: i,
    uid: uuid.v4()
  };
}).toJS();

data.appName = 'list-react';

// routes
app.get('/list', function (req, res) {
  res.json(data.list);
});

app.get('/data', function (req, res) {
  res.json(data);
});

app.listen(port);
console.log('server listening on port:', port);
