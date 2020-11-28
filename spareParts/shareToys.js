let k = 3,
	t = 5;
/**
 *
 * @param {Number} nToys
 * @param {Number} nKids
 * @description distributes n of toys among n of kids
 * and determines which kid the toys distribution will
 * end with.
 * @returns number assigned to last kid.
 */
function shareToys(nToys, nKids) {
	let lastK = 1;

	while (nToys !== 0) {
		if (lastK > nKids) {
			lastK = 1;
		} else {
			lastK += 1;
		}
		nToys -= 1;
	}

	return lastK;
}

console.log(shareToys(t, k));
