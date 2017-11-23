var sumArray = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

var multiplyArray = function(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

console.log(sumArray([4, 3, 2, 1]));
console.log(multiplyArray([4, 3, 2, 1]));
