// reverseString(num)
//
// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".


// make string to array
// use reverse
// join back

function reverseString(num) {
  num = num.split('').reverse().join('');
  console.log(num);
}

reverseString("jag testar");
