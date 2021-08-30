// ................ navbar sticky..................

$(document).ready(function(){

	var navbarS = $('.navbar');
	var logo = $('.navbar .logo span');

	$(window).scroll(function(){

		let scrollTop = $(window).scrollTop();

		if(scrollTop > 0){
			navbarS.addClass('activeNav');
		}else{
			navbarS.removeClass('activeNav');
		}

	});


});