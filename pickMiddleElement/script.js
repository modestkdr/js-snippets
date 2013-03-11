// Task : Pick the middle element(s) of a list

var givenArray = new Array(), len = 0;


/*=======================================================================*\
Function:   pickMiddleElements
Purpose:    Check if input is of type array and then pick the middle element(s) based on length
Input:      name of an array from which middle elements are to be picked 
Output:     print the middle element(s) of a given array in the console
\*=======================================================================*/
function pickMiddleElements(givenArray) {
	len = givenArray.length;
	if(givenArray instanceof Array) {
		if(len == 0 || len == 1 || len == 2) {
			console.log('given input length is less than 3');
		}
		if((len % 2 === 0) && (len > 2)) {
			console.log('middle elements are ' + givenArray[((givenArray.length)/2) - 1] + 
				' and ' + givenArray[((givenArray.length)/2)] );
		}
		if(len % 2 === 1 && len > 2) {
			console.log('middle element is ' + givenArray[Math.ceil((givenArray.length/2)) - 1]);
		}
	}
	else {
		console.log('given input is not an array');
	}
}

givenArray = [1,21,3,33,21,3,33,11];
pickMiddleElements(givenArray);