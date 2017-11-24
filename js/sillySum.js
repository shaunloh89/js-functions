function sillySum(array) {
	var count = 0;
	for (var index = 0; index < array.length; index++) {
		count += (array[index] * index); 
	}
	return count;
}

console.log(sillySum([3, 4, 5]));