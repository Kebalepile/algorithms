
/**
 *
 * @param {Number} nToys
 * @param {Number} nKids
 * @description distributes n of toys among n of kids
 * and determines which kid the toys distribution will
 * end with.
 * @returns number assigned to last kid.
 */
function shareToys(nKids, nToys) {
	let lastKid = nKids - Math.round(nKids / nToys);
	while (nToys) {
		if (lastKid >= nKids) {
			lastKid = 1;
		} else {
			lastKid++;
		}
		nToys--;
	}

	return lastKid;
}


let nOfKids = 10,
	nOfToys = 3;
console.log('last kid to play will be kid number ', shareToys(nOfKids, nOfToys));

