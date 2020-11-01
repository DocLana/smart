// $(document).ready(function(){
//     $('.carousel__inner').slick( {
//       speed: 1200,
//     //   adaptiveHeight: true,   
//       mobileFirst: true, 
//     //   centerMode: true,   
//       prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/shevronleft.png"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="img/icon/shevronright.png"></button>',
//       responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 dots: true,
//                 arrows: false
//             }
//         }   
//       ]

//   });
    
//   });

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    center : true,
    nav: false,
    navAsThumbnails: true, 
    navPosition: 'bottom', 
    navContainer: '.dots'
    // axis: 'vertical'
    // controlsText: [
    //     '<img src="img/icon/shevronleft.png">',
    //     '<img src="img/icon/shevronright.png">'
    // ]
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  // document.querySelector('.advantages__icon').addEventListener('click', function () {
  //   console.log('cas');
  // });
  