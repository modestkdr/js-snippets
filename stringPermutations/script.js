// Task : Print all the permutations of a given string
// WATER, AWTER, WTAER, WAETR, WATRE

var inputString = '', i = 0, len = 0;

function stringPermutations(inputString) {
	var initialArr = new Array();
	initialArr = inputString.split('');
	len = initialArr.length;	
	for(i = 0; i < len; i++) {
		console.log(initialArr[i] + initialArr.slice(i+1,len));
		//i++;
	}


}
inputString = 'water';
stringPermutations(inputString);
