$(document).ready(function(){

   var width_calc = $('.width_calc').width() / 100 * 70;

   var tab2_sec_img = $('#tab2 li > section .swiper-container .swiper-wrapper .img-wrapper img');

   tab2_sec_img.css({ "height": width_calc + 'px'});




   var tab1_sec_img = $('#tab1 li > section .swiper-container .swiper-wrapper .img-wrapper img');

   tab1_sec_img.css({ "height": width_calc + 'px'});




});