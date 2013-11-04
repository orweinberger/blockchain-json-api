var connector = require('./connector');

var blockchain = module.exports = function blockchain() {
  connector = new connector();
}

blockchain.prototype.API = function (path, data, callback) { 
  connector.getURL(path, data, function (res) {
    callback(res);
  });
}


