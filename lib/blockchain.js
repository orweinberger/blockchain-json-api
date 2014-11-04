var connector = require('./connector'),
	blockchain,
	conn;

blockchain = module.exports = function blockchain () {
  conn = new connector();
};

blockchain.prototype.API = function (path, data, callback) {
  conn.getURL(path, data, function (res, err) {
    callback(res, err);
  });
};
