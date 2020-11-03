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
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ')
      .eq($(this).index()).addClass('catalog__content_activ');
  });

  $('.catalog-item__content').addClass('catalog-item__content_activ');
  $('.catalog-item__list').removeClass('catalog-item__list_activ');

  function toggleCatalog(item){
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');

      })
    })
  }

  toggleCatalog('.catalog-item__link');
  toggleCatalog('.catalog-item__back');
    
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
 
  