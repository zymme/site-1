var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8108);

console.log("Server started on port 8108 accessible at http://localhost:8108; press Ctrl-C to terminate.'");
