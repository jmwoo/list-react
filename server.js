var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');

var app = express();
var port = 3000;

// settings
app.use(express.static(path.join(__dirname, 'public')));

// app logic
var list = [];

var discover = function () {
	list = [{id: 0}, {id: 1}, {id: 2}];
};

// routes
app.get('/list', function (req, res) {
  res.json(list);
});

discover();

app.listen(port);
console.log('server listening on port:', port);
