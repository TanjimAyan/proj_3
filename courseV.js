$(document).ready(function(){

	var card_height = $('.courseV-sec1 > .col .course-card');
	var card_img = $('.courseV-sec1 > .col .course-card > img');

	card_height = card_height.height();

	card_img_height = card_height / 100;

	card_img_height = card_img_height * 45;

	card_img.css({ "height": card_img_height + 'px',});


});