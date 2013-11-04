var blockchain = require('./lib/blockchain');

var bc = new blockchain();

bc.API('tx-index', '12554260', function (res) {
  //console.log(res);
});

bc.API('block-height', '1000', function (res) {
  //console.log(res);
});

bc.API('address', '1FfmbHfnpaZjKFvyi1okTjJJusN455paPH', function (res) {
  console.log(res);
});


/* More methods are available on http://blockchain.info/api/blockchain_api */