const repeatString = function (str, times) {
	return (times < 0) ? 'ERROR' : Array(times).fill(str).join('');
};

// const repeatString = function (str, times) {
// 	if (times < 0) return 'ERROR';
// 	let repeatedString = ''
// 	for (let i = 0; i < times; i++) {
// 		repeatedString += str;
// 	}
// 	return repeatedString;
// };

// Do not edit below this line
module.exports = repeatString;
