$(document).ready(function(){
    $('.carousel__inner').slick( {
      speed: 1200,
      // adaptiveHeight: true,   
      // mobileFirst: true, 
      // centerMode: true,   
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/shevronleft.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icon/shevronright.png"></button>',
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
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
    $(this)
      .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
    
  });

  // const slider = tns({
  //   container: '.carousel__inner',
  //   items: 1,
  //   slideBy: 'page',
  //   autoplay: false,
  //   controls: false,
  //   center : true,
  //   nav: false,
    
  //   // axis: 'vertical'
    
  // });
  // document.querySelector('.prev').addEventListener('click', function () {
  //   slider.goTo('prev');
  // });

  // document.querySelector('.next').addEventListener('click', function () {
  //   slider.goTo('next');
  // });
 
  