//isPrime(num)

// check if num is 1 = false
// check if num can divide by 1 or num modulo = 0
// for loop range from 1 to num
// if more then 2 return false


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

console.log(isPrime(23));
