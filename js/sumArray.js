function sumArray(numbers) {
	return numbers.reduce(
		function(accumulator, currentValue) {
			return accumulator + currentValue;
		}
	);
}

console.log(sumArray([1, 2, 3]));

function multiplyArray(numbers) {
	return numbers.reduce(
		function(accumulator, currentValue) {
			return accumulator * currentValue;
		}
	);
}

console.log(multiplyArray([4, 5, 6]));

function altSumArray(numbers){
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

console.log(altSumArray([1, 2, 3]));

function altMultiplyArray(numbers){
	var sum = 1;
	for (var i = 0; i < numbers.length; i++) {
		sum *= numbers[i];
	}
	return sum;
}

console.log(altMultiplyArray([4, 5, 6]));
