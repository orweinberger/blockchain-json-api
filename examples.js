var blockchain = require('./lib/blockchain');

var bc = new blockchain();
         
bc.API('tx-index', '12554260', function (res) {
  console.log(res.time);
});

bc.API('address', '1FfmbHfnpaZjKFvyi1okTjJJusN455paPH', function (res) {
  console.log(res);
});

bc.API('address', '1FfmbHfnpaZjKFvyi1okTjJJusN455paPH', function (res) {
  console.log(res);
});