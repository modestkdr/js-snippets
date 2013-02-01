/* TASK
 * Design a solution(as reusable as possible) for dirty checking of forms and 
 * navigate away warning: If the user has interacted with any of the controls 
 * within a form and has entered data in one or many of them and then tries to 
 * leave the page, he/she should be shown a warning prompt saying 
 * ‘There is unsaved data on the page, are you sure you want to leave’ with 
 * the options ‘Stay on page’ and ‘Leave Page’.
 * 
 * The user may leave the page by clicking on a anchor which will take him 
 * away from the current page.
 */

var anchorClick = false;

/*=======================================================================*\
Function:   getAway
Purpose:    Closes the current page when called
\*=======================================================================*/
function getAway() {
	anchorClick = true;
	console.log('anchorclick: ' + anchorClick);
	window.open('', '_self', '');
	window.close();  
  }

// Execute the getAway function when a user clicks on the anchor 'leavePage'
  $(function() {
    $("#leavePage").on("click", function(e) {
      getAway();
    });
  });

/* Store the default values of various elements in the form as a serialized
  string */
var defaultStr = ''; 
defaultStr = $("form").serialize().toString();
console.log('default serialized str: ' + defaultStr);

/* Serialize the form data to a variable; check if the current serialized string
 * is equal to the default string. Display the warning prompt if the default 
 * and current serialized strings are not equal.
 */

/*=======================================================================*\
Function:   showValues
Purpose:    Serialize the current form data to a variable. Compare the current
			serialized data to the default serialized data (by executing the 
			compareSerialStrs function. Execute the displayPrompt function if
			the 'leavePage' anchor is not clicked.
\*=======================================================================*/
var str = '';
function showValues() {
	str = $("form").serialize().toString();
    $("#serialize").text(str); // print the serialized data to DOM for testing/debugging
    compareSerialStrs();
    if(!anchorClick) {
    	displayPrompt();
    }
    console.log('current serialized str: ' + str);
    console.log('are strings equal? ' + compareSerialStrs());
}


/* Update the serialized string in the DOM if user has interacted with 
*  any of the controls below
*/ 
$(":checkbox, :radio").click(showValues);
$("select").change(showValues);
$("input:text, input:password").change(showValues);
showValues();

/*=======================================================================*\
Function:   compareSerialStrs
Purpose:    Compare the default serialized string with the current serialized 
			string. If, the strings are equal then, form is not dirty as user 
			has not interacted with any of the controls in the form.
Output:		returns true if the two strings are equal else, returns false.
\*=======================================================================*/
function compareSerialStrs() {
	if(defaultStr === str) {
		return true;
	}
	else {
		return false;
	}
}



/*=======================================================================*\
Function:   displayPrompt
Purpose:    If default and current serial strings are not equal then,  display 
			the prompt when user attempts to close the page
\*=======================================================================*/
function displayPrompt() {	
	console.log('comparestrs ' + compareSerialStrs() + ' anchorclick: ' + anchorClick);
	if(!compareSerialStrs()) {
		window.onbeforeunload = confirmExit;
		function confirmExit()
		{
			return "There is unsaved data on the page";
		}
	}
}