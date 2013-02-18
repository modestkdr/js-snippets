// Task: Function to remove duplicate values in an array

var myArr = ['app', {name:"label", lock:true, resizeable:true}, '22', 1, 1];
var l = 0, initial, resultArr = [];


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
Function:   removeDuplicates
Purpose:    remove duplicate values in a given array
Input:      name of an array from which duplicate values are to be removed 
Output:     a new array which does not have any duplicate values in it
\*=======================================================================*/
function removeDuplicates(myArr) {
    for(var i = 0; i < myArr.length; i++) {
        initial = myArr[i];
        if(contains(resultArr, initial)) { } // don't push 
        else { resultArr.push(initial); }       
    }
    return resultArr;
}
console.log(removeDuplicates(myArr));