var merge = function(arr1, arr2) {
  var newArray = arr1.concat(arr2);
  newArray.sort(function(a, b) {
    return a - b;
  });
  return newArray;
};
console.log(merge([3, 6, 11], [2, 4, 5, 8, 9]));

/* alternative solution
var merge = function(arr1, arr2) {
  for (var index = 0; index < arr2.length; index++) {
    arr1.push(arr2[index]);
  }
  for (combIndex = 0; combIndex < arr1.length; combIndex++) {
    for (i = 1; i < arr1.length - combIndex; i++) {
      if (arr1[combIndex] > arr1[combIndex + i]) {
        var x = arr1[combIndex];
        var y = arr1[combIndex + i];
        arr1[combIndex] = y;
        arr1[combIndex + i] = x;
      }
    }
  }
  return arr1;
};
*/
