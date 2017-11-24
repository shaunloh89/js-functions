// // The function should take two sorted arrays of numbers as input and return a merged array of the sorted numbers from the input. For example, if the input arrays were var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9]; Then the returned array would be: [2,3,4,5,6,8,9,11].

function merge(arr1, arr2) {
	combinedArr = [];
	combinedArr = arr1.concat(arr2);
	return combinedArr.sort(function(a, b) { return a - b });
}

console.log(merge([3, 22, 1], [5, 4, 6]));

// function altMerge(arr1, arr2) {
// 	var combinedArr = [];
// 	var rearrangedArr = [];

// 	for (var i = 0; i < arr1.length; i++) {
// 		combinedArr.push(arr1[i]);
// 	}
// 	for (var i = 0; i < arr2.length; i++) {
// 		combinedArr.push(arr2[i]);
// 	}

	

// 	return combinedArr;
// }