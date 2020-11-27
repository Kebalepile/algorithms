let ary = [9, 8, 7, 6, 5, 3, 2, 4, 1];

// which number is missing in an unsorted array ?

/**
 *
 * @param {Array} ary
 * @description
 * funtion assumes that the next number in the array
 * is greater by 1, from the previous number in the array
 * predicts which number is missing in given a Array.
 * @returns
 * missing number or null if no number is missing.
 */
function missingNumber(ary) {
	let missingNum = null;
	ary.sort((a, b) => a - b).forEach((num, index, ary) => {
		let numNotEqual = num + 1 !== ary[index + 1];
		let indexIsLessThanAryLength = index !== ary.length - 1;

		if (numNotEqual && indexIsLessThanAryLength) {
			missingNum = num + 1;
		}
	});

	return missingNum;
}

console.log('missin number is ', missingNumber(ary));
