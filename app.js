function chart() {
  this.options = {};
  this.options.charttype = 'line'
  console.log('init');
}

chart.prototype.draw = function(container) {
  console.log('drawing chart');
}

var test = new chart();
console.log(test.options);
test.draw('123');