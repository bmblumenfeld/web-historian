var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../web/archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!


exports.readListOfUrls = function(callback) {
  var body = [];
  fs.readFile(exports.paths.list, 'utf8', function (err, data) {
    if (err) {
      throw err;
    } 
    var list = data.split('\n');
    list.forEach(function (element){
      body.push(element);
    });
    callback(body);
  });
};

exports.isUrlInList = function(url, callback) {
  var result = false;
  exports.readListOfUrls(function (urls) {
    if (urls.includes(url)) {
      result = true;
    }
    callback(result);
  });
};

exports.addUrlToList = function(url, callback) {
  // var textBody = '';
  // exports.readListOfUrls(function (urls) {
  //   urls.forEach(function (element) {
  //     textBody += (element + '\n');
  //   });
  // });
  fs.appendFile(exports.paths.list, url + '\n', (err) => {
    if (err) {
      throw err;
    } 
    callback(url);
  });
  // var writeStream = fs.createWriteStream(exports.paths.list, { flags : 'w' });
  // var readStream = new MyReadStream();
  // readStream.pipe(writeStream);
  // writeStream.on('close', function () {
  //   console.log('All done!');
  // });

};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
