let arr = [
	2,
	3,
	[3, 5, 32, [45, 6, [45, 2, 1, 5], [6, 6, 7, [1, 7, 8, [5, [100, [20, [37, [23, [45, [204, [46046]]]]]]]], 9]]]],
];

arr = arr.reduce((acc, cur) => {
	if (Array.isArray(cur)) {
		acc = [...acc, ...deepFlat(cur)];
	} else {
		acc.push(cur);
	}

	return acc;
}, []);

/**
 * @param {Array} ary
 * @returns {Array}
 * @description
 * a Big-O(n) function that turns
 * a multi-demension Array into
 * a one demension Array.
 */
function deepFlat(ary) {
	if (ary.some((e) => Array.isArray(e))) {
		return deepFlat(ary.flat()); //important piece !
	}

	return ary;
}
console.log(arr);
console.log(arr);

// let acc = [];

// for (let item of arr) {
// 	if (Array.isArray(item)) {
// 		acc.push(deepFlat(item));
// 	} else {
// 		acc.push(item);
// 	}
// 	acc = deepFlat(acc);
// }
// console.log(acc);
