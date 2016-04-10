
$(document).ready(function() {

var curYear  = 2016
var curMonth = 4

var ccMonth = $('#month').val()
var ccYear = $('#year').val()


$('button').click( function(){
	if (ccYear == curYear && ccMonth < curMonth) {
		alert("Credit card is expired");
	} else if (ccYear == curYear && curMonth < ccMonth ){
		alert("Credit card is not expired");
	} else if (ccYear < curYear) {
		alert("Credit card is expired");
	} else if (ccYear > curYear) {
		alert("Credit card is not expired");
	}

})

}) //end doc ready funct