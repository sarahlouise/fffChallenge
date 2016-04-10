
$(document).ready(function() {



	// if ( $('.display-box').html() === '') {
	// $('.display-box').toggleClass('hidden')
	// };	

$('.thumb').on("click", function(){
	// console.log($(this));
	// Working Code
	var content = $(this).html();
	var $displayBox = $('.display-box'); //all display-boxes
	var boxWidth = $('.display-box').first().width(); //width of one display-box
	// console.log(boxWidth);

//use the first three given boxes
	if ( $('#thumb-3').html() === '') {
		$('#thumb-3').toggleClass('hidden')
		$( "#thumb-3" ).append( content );

	} else if ( $('#thumb-2').html() === '') {
		$('#thumb-2').toggleClass('hidden')
		$(".displayBox").each().animate({
			right: boxWidth,
			easing: 'linear'
			}, "slow");
		$( "#thumb-2" ).append( content );
	} else if ( $('#thumb-1').html() === ''){
		$('#thumb-1').toggleClass('hidden')
		$(".displayBox").each().animate({
			right: boxWidth,
			easing: 'linear'
			}, "slow");
		$( "#thumb-1" ).append( content );
	} else {
		//on the fourth box, add a new display-box to the front to move the rest down
		$('.info-container').prepend( "<div class='display-box new'>" + content + "</div>" );
		$(".displayBox").each().animate({
			right: boxWidth,
			easing: 'linear'
			}, "slow");
			// if ( $(".new").length > 1) {
				// console.log($displayBox.length())
			$displayBox.last().remove(); //remove the last box so only 3 display boxes are ever showing
				// })
			// }
		}

	});
	})
	 // closes on ready funct.



// prepend to .display-box 
// translate the length of one display box element to the right
// toggleClass hidden on display-box.last


// DUMMY INFO _ SAVE FOR LAST //
// $.ajax({
//   url: 'https://randomuser.me/api/?results=10/?inc=name,picture,phone',
//   dataType: 'json',
//   success: function(data){
//   console.log(data);
//   }
// });

