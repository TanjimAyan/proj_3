$(document).ready(function(){

	let course_card_col = $('.courseV-sec1 .col');

	let details_icon = $('.courseV-sec1 .col .course-card > .details_icon');

	let details = $('.courseV-sec1 .col .course-card > .details');

		course_card_col.mouseover(function(){
			index = $(this).index() + 1; //global variable since it defines without var keyword
			console.log('index'+index);
		});

		

		//Check if the device is touch or non-touch device

		var isTouch = ('ontouchstart' in document.documentElement);

	    if (isTouch){
	        course_card_col.addEventListener('touchstart',function(){
				index = $(this).index() + 1; //global variable since it defines without var keyword
				console.log('index'+index);
			});
	    }



		course_card_col.hover(function(){
			hello2();
		});

		details_icon.click(function(){

				curentIndex = index;
				console.log('curent index' + index);

				if(index == curentIndex){
					hello();
				}

				if(index != curentIndex){
					alert('hello');
				}

			});




		function hello(){
				var select = '.courseV-sec1 .col:nth-child('+index+') .course-card > .details';

				var test = $(select);

				test.toggleClass('details_active');
		}

		function hello2(){
				var select = '.courseV-sec1 .col:nth-child('+index+') .course-card > .details';

				var test = $(select);

				test.removeClass('details_active');
		}

	

});