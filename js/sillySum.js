var sillySum = function(arr) {
  var count = 0;
  for (var index = 0; index < arr.length; index++) {
    count += arr[index] * index;
  }
  return count;
};
console.log(sillySum([6, 5, 4, 3, 2, 1]));
