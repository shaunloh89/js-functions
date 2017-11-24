function isPrime(num) {
	var factorsCount = 0;
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			factorsCount += 1;
		}
	}
	// console.log("Number of factors for " + num + ": " + factorsCount);

	return factorsCount == 2 ? true : false;
}

function primes(max) {
	var primeArray = [];

	for (var n = 1; n <= max; n++) {
		if (isPrime(n)) {
			primeArray.push(n);
		}
	}

	return primeArray;
}

console.log(primes(29));

/*
# List of prime numbers from from 1 to 100

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

*/