const ary = selection_sort(generateNumbers(100));
console.log(ary);


function selection_sort(ary) {
	let acc = [];
	while (ary.length) {
		let index = sort(ary);
		acc.push(...ary.splice(index, 1));
	}
	return acc;
	// *****************************************
	//sort helper function
	// *****************************************
	function sort(ary) {
		let index = 0;
		let item = ary[0];

		for (let i = 0; i < ary.length; i++) {
			if (ary[i] < item) {
				index = i;
				item = ary[i];
			}
		}

		return index;
	}
}


function generateNumbers(range, total = arguments[0]) {
	let acc = new Set();

	generate(total);

	return Array.from(acc);

	function generate(total) {
		while (total) {
			acc.add(Math.floor(Math.random() * range));

			total--;
		}
	}
}
