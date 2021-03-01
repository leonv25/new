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
  /* Кінець коду для слайдера по способу Slick Slider */

  /* початок коду для табів */
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {/* потрібна крапка */
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active') /* не потрібна крапка */
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  /* кінець коду для табів */

  /* початок коду для переключання інформації по посиланнях - не оптимізований */
  /* $('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });

  $('.catalog-item__back').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  }); */
  /* кінець коду для переключання інформації по посиланнях - не оптимізований */

   /* початок коду для переключання інформації по посиланнях - оптимізований */
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
   /* кінець коду для переключання інформації по посиланнях - оптимізований */





});


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