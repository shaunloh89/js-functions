// sumArray(arr)
//
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var array = [1, 2, 3, 4, 5];

function sumArray(arr) {
  var sumResult = arr.reduce(function(a, b) {
    return a + b;
  });
console.log(sumResult);
}

function multiplyArray(arr) {
  var multiplyResult = arr.reduce(function(a, b) {
    return a * b;
  });
  console.log(multiplyResult);
}

sumArray(array);
multiplyArray(array);
