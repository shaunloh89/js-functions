var reverseString = function(num) {
  var newString = "";
  for (var char = 0; char < num.length; char++) {
    newString += num[num.length - char - 1];
  }
  return newString;
};
console.log(reverseString("appleapple"));
