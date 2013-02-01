/* TASK
*	Write a function that checks for a nested property on an object.  
*	For example: app.person.account.email
*	Design it with jQuery style API in mind, for ex: val().
* 
*/


function checkNested(obj) {
  var args = Array.prototype.slice.call(arguments),
      obj = args.shift();

  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}

// Test case
var testObject = {level1:{level2:{level3:'level3'}} };

// Print the results of test cases to the DOM
document.getElementById('result').innerHTML = checkNested(testObject, 'level1', 'level2', 'level3') + "<br>";
document.getElementById('result').innerHTML += checkNested(testObject, 'level1') + "<br>";
document.getElementById('result').innerHTML += checkNested(testObject, 'level1', 'level4');


// print the result of tests to the console as well
console.log(checkNested(testObject, 'level1', 'level2', 'level3')); // true
console.log(checkNested(testObject, 'level1')); // true
console.log(checkNested(testObject, 'level1', 'level4')); // false