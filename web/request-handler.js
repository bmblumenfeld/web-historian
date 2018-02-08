var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var header = helpers.headers;
var serveAss = helpers.serveAssets;
var fs = require('fs');
var index = '';
var indexMaker = fs.readFile('./public/index.html', function (err, html) {
  if (err) {
    throw err;
  } 
  index += html;
});
//make indexloading which is in public folder. Same method as index 

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var statusCode = 200;
  var converse = {};
  console.log('dirname', __dirname);
  converse.results = [];
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(statusCode, header);
    
    res.end(index);
    // res.end(archive.paths.list);
  }
};
