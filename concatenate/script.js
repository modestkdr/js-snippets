/* TASK
	Write a function for concatenating strings. Function should be able to 
	accept any number of Strings. It should be able to accept arrays as well.
*/

/*=======================================================================*\
Function:   addElement
Purpose:    Add a text input box to the DOM and set the attributes 
			as specified in the function
\*=======================================================================*/
function addElement() {
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("class", "userinput");
    var elementsContainer = document.getElementById("elementsContainer"); 
    elementsContainer.appendChild(element);
}


/*=======================================================================*\
Function:   concatStr
Purpose:    get elements from DOM and concatenate the input string/arrays
\*=======================================================================*/
function concatStr() {
	var nodeList = document.getElementsByClassName('userinput');
	var concatlist = '';
	for (var i = 0; i < nodeList.length; i++) {
		console.log(i + " > " + nodeList[i].value.toString());
		concatlist += nodeList[i].value.toString();
	}
	console.log("Concatenated list" + concatlist);
	document.getElementById('resultStr').innerHTML = concatlist;
}