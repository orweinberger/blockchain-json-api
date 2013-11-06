var blockchain = require('./lib/blockchain');

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


/* More methods are available on http://blockchain.info/api/blockchain_api */