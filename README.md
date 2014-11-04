Blockchain-API-enBitcoins
=========================

This is a simple implementation of the blockchain.info JSON API written for nodejs.

For all available methods please visit: http://blockchain.info/api/blockchain_api

## Synopsis


``` javascript
var blockchain = require('./lib/blockchain'),
    bc = new blockchain();

bc.API('tx-index', '1000', function (res, err) {
  if (err) return console.log('Error! ', err);
  console.log(res);
});

bc.API('block-height', '1000', function (res, err) {
  if (err) return console.log('Error! ', err);
  console.log(res);
});

bc.API('address', '1LTNyzQDxyAU89BaQwk8vaePADnXYErYda', function (res, err) {
  if (err) return console.log('Error! ', err);
  console.log(res);
});

```



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/orweinberger/blockchain-json-api/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

