var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var header = helpers.headers;
var serveAss = helpers.serveAssets;
var fs = require('fs');
var index = '';
var loadIndex = '';
var indexMaker = fs.readFile('./public/index.html', function (err, html) {
  if (err) {
    throw err;
  } 
  index += html;
});
var indexLoading = fs.readFile('./public/loading.html', function (err, html) {
  if (err) {
    throw err;
  } 
  loadIndex += html;
});

//make indexloading which is in public folder. Same method as index 

// require more modules/folders here!
archive.downloadUrls(['google.com']);

exports.handleRequest = function (req, res) {
  var requestBody = '';
  var statusCode = 200;
  var converse = {};
  console.log('dirname', __dirname);
  converse.results = [];
  if ((req.method === 'GET') && (req.url === '/')) {
    console.log('get got');
    res.writeHead(statusCode, header);
    
    res.end(index);
    // res.end(archive.paths.list);
  } if ((req.method === 'GET') && (req.url === '/styles.css')) {
    console.log('get got');
    res.writeHead(statusCode, header);
    
    res.end();
    // res.end(archive.paths.list);
  } else if (req.method === 'POST') {
    
    req.on('data', (data) => {
      requestBody += data;
    });
    req.on('end', () => {
      console.log(requestBody);
      res.writeHead(201, header);
  
      res.end(loadIndex);
    });
    
  }
};
