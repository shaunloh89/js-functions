// findLongestWord(arr)
//
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

var array = ['alibaba', 'lazada', 'facebook', 'google', 'propertyguru', 'guruproperty']

function findLongestWord(arr) {
  var longest = arr.sort(function (a, b) {
     return b.length - a.length;
   });
   console.log(longest.length);
}

findLongestWord(array);  
