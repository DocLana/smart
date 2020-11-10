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

  // modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');

  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  $('.button_mini').on('click', function() {
    $('.overlay, #order').fadeIn('slow');
  });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });

  // $('#consultation-form').validate();
  // $('#consultation form').validate({
  //   rules: {
  //     name:"required",
  //     phone:"required",
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   messages: {
  //     name: "Пожалуйста, ввудите свое имя",
  //     phone: "Пожалуйста введите свой номер телефона",
  //     email: {
  //       required: "Пожалуйста, введите свою почту",
  //       email: "Неправильно введен адрес почты"
  //     } 
  //   }
  // });
  // $('#order form').validate(); 
  function valideForms(form){
    $(form).validate({
      rules: {
        name:"required",
        phone:"required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        } 
      }
    });

  };

  
  valideForms('#consultation-form'),
  valideForms('#consultation form'),
  valideForms('#order form')

  $('input[name=phone]').mask("+7(999) 999-99-99");
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
});

 
  