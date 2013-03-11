// Task: find unique words in the paragraph or string

var resultArr = [], initialArray = [], inputParagraph = '', i  = 0;

/*=======================================================================*\
Function:   contains
Purpose:    return true if an array contains a given value else, return false
Input:      name of array and a value
Output:     boolean (true if the given value is in the array, false otherwise)
\*=======================================================================*/
function contains(arr, value) {
    l = arr.length;
    while (l--) {
        if (arr[l] === value) return true;
    }
    return false;
}


/*=======================================================================*\
Function:   findUniqueWords
Purpose:    create a result array with unique elements
Input:      name of an array from which duplicate values are to be removed 
Output:     a new array which does not have any duplicate values in it
\*=======================================================================*/
function findUniqueWords(inputString) {
	for(i = 0; i < initialArray.length; i++) {
		if(contains(resultArr, initialArray[i])) { } // don't push
		else {
			resultArr.push(initialArray[i]);
		}
	}
	return resultArr;
}
inputParagraph = "this this is a 12 1 1 21 test a test";
initialArray = inputParagraph.split(' '); // convert string to an array

console.log(findUniqueWords(inputParagraph));


