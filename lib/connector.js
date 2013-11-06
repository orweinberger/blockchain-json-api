var http = require('http');

var connector = module.exports = function connector() { }

connector.prototype.getURL = function (path, data, callback) {
  var options = {
    host: 'blockchain.info',
    path: '/' + path + '/' + data + '?format=json'
  };
  http.request(options,function (response) {
    var str = '';
    response.on('data', function (chunk) {
      str += chunk;
    });
    response.on('end', function () {
      try {
        JSON.parse(str);
      } catch (e) {
        if (str.indexOf('banned') > 0)
          return callback(null,"IP Banned")
        else
          return callback(null,str);
      }
      return callback(JSON.parse(str));
    });
  }).end();
}
