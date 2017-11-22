var arr1 = [3, 6, 11];
var arr2 = [2, 4, 5, 8, 9];
var mergedArr = [];

function merge(arr1, arr2) {
  mergedArr = arr1.concat(arr2);
  mergedArr = mergedArr.sort(function(a, b) {
    return a - b;
  });
  console.log(mergedArr)
}

merge(arr1, arr2);
