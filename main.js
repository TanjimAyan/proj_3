var navbar = document.querySelector('.navbar');
var navbar_height = document.querySelector('.navbar').clientHeight;

navbar.style.height = navbar_height + 2 + 'px';

// ..................................

var home_right_img_wrapper = document.querySelector('.home .right .img-wrapper');

var home_right_img_wrapper_W = home_right_img_wrapper.clientWidth;

home_right_img_wrapper.style.height = home_right_img_wrapper_W + 'px';

$(window).resize(function(){

    var home_right_img_wrapper = document.querySelector('.home .right .img-wrapper');

    var home_right_img_wrapper_W = home_right_img_wrapper.clientWidth;

    home_right_img_wrapper.style.height = home_right_img_wrapper_W + 'px';

  });



/* for swipper slide starts*/

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

/* for swipper slide ends*/