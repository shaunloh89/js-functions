var isPrime = function(num) {
  if (num > 1) {
    for (var x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  } else if (num === 1) {
    return false;
  } else {
    console.log("Please enter an integer greater than 0.")
  }
};
var primes = function(max) {
  var array = [];
  var x = 1;
  while (array.length < max) {
    if (isPrime(x) === true) {
      array.push(x);
    }
    x++;
  }
  return array;
};
console.log(primes(20));
