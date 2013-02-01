

// buiild the board
function buildBoard() {
var columns = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
for(var i = 0; i < columns.length; i++) {
	jQuery("#"+columns[i]).append("<li><li><li><li><li><li><li><li>");
}
}
buildBoard();

var clickCount = 1;
var position = 8;
var cells;
jQuery("#game-board ul").click(function(){
if (jQuery(this).find('>li:nth-child('+ position + ')').attr('class') != undefined) {
	// do nothing
}
else {
	if(clickCount%2 === 0) {
		jQuery(this).find('>li:nth-child(' + position + ')').addClass("blue");
		clickCount++;	

		//console.log(this);
		var column = jQuery(this).attr('key');
		console.log(column);
		
	}
	else {
		jQuery(this).find('>li:nth-child(' + position + ')').addClass("red");
		clickCount++;			
		var column = jQuery(this).attr('key');
		console.log(column);
		//get the cell position
		//cells[position,column] === 2;
	}
}
});

