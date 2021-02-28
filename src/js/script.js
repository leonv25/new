/* Початок коду для слайдера по способу Slick Slider */
$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });



});
/* Кінець коду для слайдера по способу Slick Slider */

/* Початок коду для слайдера по способу Tiny Slider */
/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
}); */
 /* Кінець коду для слайдера по способу Tiny Slider */