/* TASK
	Filter out 2 different collections:
	a)	All tag objects associated with this user.
	b)	All other tag objects.
*/

//The UserTags object has the tagIds of the tags associated with this user
var UserTags = [
		{
			blah:"blah",
			tagId:12
		},
		{
			blah:"blah",
			tagId:24
		}
];

// AllTags is a collection of all the tag objects in the application
var AllTags = [
		{
			name:"science",
			id:12
		},
		{
			name:"life",
			id:24
		},
		{
			name:"work",
			id:62
		},
		{
			name:"arts",
			id:16
		},
];


/*=======================================================================*\
Function:   getValues
Purpose:    get values of a property from nested objects
Input:      object name and property name
Output:     an array of values
\*=======================================================================*/
function getValues(obj, propName){
	var values = [];
	for(var key in obj){
		if (obj.hasOwnProperty(key)) {
			//console.log(obj[key]);
			for(var name in obj[key]){
				if (obj[key].hasOwnProperty(propName)) {
					if(name === propName) {
						values.push(obj[key][propName]);
						//console.log(obj[key][propName]);
					}
				}
			}
		}
	}
	return values;
};

// Store the tag id's from the UserTags object
var usertagids = getValues(UserTags, 'tagId');
//console.log(usertagids);

// Store the tag id's from AllTags collection
var alltagids = getValues(AllTags, 'id');
//console.log(alltagids);

var associatedTagIds = [];
var otherTagIds = [];

// If a user tag id matches an all tag id then, add it to the associatedTagIds array
for(var i = 0; i < usertagids.length; i++) {
	for(var j = 0; j < alltagids.length; j++) {
		if(usertagids[i] === alltagids[j]) {
			associatedTagIds.push(alltagids[j]);
			//console.log(alltagids[j]);
		}
	}
}
//console.log(associatedTagIds);


/*=======================================================================*\
Function:   contains
Purpose:   check if an object contains a given value
Input:      value, object name
Output:     returns true if object contains the value
\*=======================================================================*/
function contains(a, obj) {
    for (var h = 0; h < a.length; h++) {
        if (a[h] === obj) {
            return true;
        }
    }
    return false;
}

/* If an alltag id is not in the associatedTagIds array then, 
*  add it to the otherTagIds array */
for(var g = 0; g < alltagids.length; g++) {
	if(!contains(associatedTagIds,alltagids[g])) {
		otherTagIds.push(alltagids[g]);
	}
}
//console.log(otherTagIds);


/*=======================================================================*\
Function:   filterCollection
Purpose:   	print the tag objects associated with the user or other objects, depending on the input parameter
Input:      object name, property name to filter, array containing tag id's, id in DOM to print the result
Output:     prints objects in JSON format to the DOM
\*=======================================================================*/
function filterCollection(object,identifier, arrayOfIds, printToDomId) {
	for(var k = 0; k < arrayOfIds.length; k++) {
		for(var sub in object){
			if (object.hasOwnProperty(sub)) {
				for(var str in object[sub]){			
					if (object[sub].hasOwnProperty(identifier)) {
							if(arrayOfIds[k] === object[sub][identifier]) {
								document.getElementById(printToDomId).innerHTML 
								+= JSON.stringify(object[sub]);
								console.log(JSON.stringify(object[sub]));
								break;
							}
					}
				}
			}
		}
	}
}

// Print all tag objects associated with this user
filterCollection(AllTags, 'id', associatedTagIds, 'tagObjectsAssociatedwithUser');

// Print all other tag objects
filterCollection(AllTags, 'id', otherTagIds, 'otherTagObjects');