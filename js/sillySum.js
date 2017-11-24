// sillySum(arr)
//
// Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.
//
// count += (number * index)


// loop through the array of numbers
// each number[i] * i add to total

var array = [1, 2, 3, 4, 5, 6]

function sillySum(arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    count += (arr[i] * i);
  }
  console.log(count);
}

sillySum(array);
