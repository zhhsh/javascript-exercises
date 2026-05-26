const removeFromArray = function (array, ...removeTargets) {
	return array.filter(e => !(removeTargets.includes(e)));

	// let i = 0;
	// while (i < array.length) {
	// 	if (removeTargets.includes(array[i])) {
	// 		array.splice(i, 1);
	// 	} else {
	// 		i++;
	// 	}
	// }
	// return array;
};

// Do not edit below this line
module.exports = removeFromArray;
