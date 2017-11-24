function maxOfThree(num1, num2, num3) {
	var largerNum = 0;
	largerNum = num1 > num2 ? num1 : num2;
	largerNum = largerNum > num3 ? largerNum : num3;
	return largerNum;
}

console.log(maxOfThree(9, 6, 8));

function altMaxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else if (num3 > num1 && num3 > num2) {
		return num3;
	}
}

console.log(altMaxOfThree(9, 6, 8));