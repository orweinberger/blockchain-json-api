Blockchain-JSON-API
===================

This is a simple implementation of the blockchain.info JSON API written for nodejs.

For all available methods please visit: http://blockchain.info/api/blockchain_api

## Synopsis


``` javascript
var blockchain = require('blockchain-json-api');

var bc = new blockchain();

bc.API('tx-index', '1000', function (res, err) {
  if (err)
    console.log('Error! ', err)
  else
    console.log(res);  
});

bc.API('block-height', '1000', function (res, err) {
  if (err)
    console.log('Error! ', err)
  else
    console.log(res);
});

bc.API('address', '1LTNyzQDxyAU89BaQwk8vaePADnXYErYda', function (res, err) {
  if (err)
    console.log('Error! ', err)
  else
    console.log(res);
});

```

