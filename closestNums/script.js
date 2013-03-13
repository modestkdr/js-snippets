// Task: How to find the closest 2 numbers in an array of unique positive numbers

var inputArray = new Array(), i = 0, difference = 1, firstNum = 0, secondNum = 0;

/*=======================================================================*\
Function:   closestNums
Purpose:    find the closest 2 numbers in an array of unique positive numbers
Input:      name of an array from which closest 2 numbers are to be obtained 
Output:     print the closest 2 numbers along with the difference between those 2 numbers
\*=======================================================================*/
function closestNums(inputArray) {
	var tempArr = new Array();

	// Check if the given input is an Array
	if(inputArray instanceof Array) {

		// Sort the array in descending order
		tempArr = inputArray.sort(
			function(a,b) {
				return b-a;
			});		

		for(i = 0; i < tempArr.length-1; i++) {
			var tempDiff = tempArr[i] - tempArr[i+1];
			if(tempDiff <= difference) {
				difference = tempDiff;				
				firstNum = tempArr[i];
				secondNum = tempArr[i+1];
				console.log('Difference: ' + difference + ', Numbers are: ' + firstNum + ' and ' + secondNum);
			}			
		}
	}
	else {
		console.log('Given input is not an array');
	}
}

// Sample case
inputArray = [1,9,22,8,79,27,19,34,99,12];
closestNums(inputArray);
