var connector = require('./connector');
var c;

var blockchain = module.exports = function blockchain() {
  c = new connector();
}

blockchain.prototype.API = function (path, data, callback) {
  c.getURL(path, data, function (res, err) {
    callback(res, err);
  });
}


