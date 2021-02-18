$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,/* класична точка переходу з компютерів на планшети і мобільні версії */
                settings: {
                  dots: true,
                  arrows: false
                }
              },
        ]
      });
  });