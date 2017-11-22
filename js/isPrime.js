//isPrime(num)

//Create a function to return true or false if a number passed in a prime number.

function isPrime(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isPrime(3));
