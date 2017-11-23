var findLongestWord = function(arr) {
  var arrayLength = [];
  for (var index = 0; index < arr.length; index++) {
    arrayLength.push(arr[index].length);
  }
  var result = arrayLength.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return result;
};
console.log(findLongestWord(["abcd", "ab", "abcdefgh", "a"]));
