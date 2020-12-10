const nestedArr = [
	2,
	3,
	[3, 5, 32, [45, 6, [45, 2, 1, 5], [6, 6, 7, [1, 7, 8, [5, [100, [20, [37, [23, [45, [204, [46046]]]]]]]], 9]]]],
];

function flattern(ary) {
	return ary.reduce((acc, cur) => {
		if (Array.isArray(cur)) {
			acc = acc.concat(flattern(cur));
		} else {
			acc.push(cur);
		}

		return acc;
	}, []);
}

console.log(flattern(nestedArr));
console.log(nestedArr.flat(Infinity));
