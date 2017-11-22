// maxOfThree(num1, num2, num3)
//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

// if num1 > num2 && num1 > num3 then num1 largest
// else if num2 > num1 && num2 > num3 then num2 largest
// else num3 largest


function maxOfThree(num1, num2, num3) {

if (num1 > num2 && num1 > num3) {
  console.log(num1 + ' is the largest');
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + ' is the largest');
} else {
  console.log(num3 + ' is the largest');
}
}


maxOfThree(3, 8, 10);
