function isPrime(num) {
var count = 0;

if (num == 1) {
  return false;
}

for (var i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;

  }
}
if (count == 2) {
  return true;
} else {
  return false;
}
}


var primesFinal = [];

function primes(max) {
  for (var i = 1; i <= max; i++) {
    if (isPrime(i)) {
      primesFinal.push(i);
    }
  }
  console.log(primesFinal);
}

primes(29);
