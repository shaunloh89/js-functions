var primesFinal = [];

function isPrime(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function primes(max) {
  for (var i = 1; i <= max; i++) {
    if (isPrime(i)) {
      primesFinal.push(i);
    }
  }
  console.log(primesFinal);
}

primes(21);
