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
console.log(isPrime(109));
