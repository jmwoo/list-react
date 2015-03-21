var express = require('express');
var path = require('path');
var request = require('request');
var fs = require('fs');
var download = require('./download').download;

var app = express();
var port = 3000;

// settings
app.use(express.static(path.join(__dirname, 'public')));

// app logicßß
var lists = [];
// var filename = './lists.json'

// var read = function () {
//   fs.readFile(filename, function read(err, data) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     lists = JSON.parse(data.toString());
//   });
// };

var discover = function () {
	lists = [{id: 0}, {id: 1}, {id: 2}];
};

// routes
app.get('/lists', function (req, res) {
  res.json(lists);
});

discover();

app.listen(port);
console.log('server listening on port:', port);
