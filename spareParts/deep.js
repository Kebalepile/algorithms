let arr = [
	2,
	3,
	[3, 5, 32, [45, 6, [45, 2, 1, 5], [6, 6, 7, [1, 7, 8, [5, [100, [20, [37, [23, [45, [204, [46046]]]]]]]], 9]]]],
];

const nestedAry = [1,2,[3,4,[5,6,7],8,9,10]];

function flatten(ary) {
	const newAry = ary.reduce((acc, cur) => {
		if (Array.isArray(cur)) {
		    acc = acc.concat(flatten(cur));
		
		} else {
			acc.push(cur);
		}
		return acc;
	}, []);
	return newAry;
}


console.log(flatten(nestedAry))
console.log(flatten(arr)):
