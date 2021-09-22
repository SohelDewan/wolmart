$(function(){
        'use strict';
        // BANNER SLIDER
        $('#banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow:' <i class="fas fa-chevron-left prev">',
            nextArrow:' <i class="fas fa-chevron-right next">',
          });
 
    })  

    // popUp Start
    $('.popup_close').on('click', function(){
      $('.popup_body').fadeOut();
    });

  // Count Down js start
  $('.coundown').countdown('2030/01/01', function (event) {
    $(this).html(event.strftime('%n days, %H:%M:%S'));
  });
  
    // Count Down js start
    $('.coundown2').countdown('2030/01/01', function (event) {
      $(this).html(event.strftime('%n days, %H:%M:%S'));
    });
    
  // Handel Counter js
  $('#handleCounter').handleCounter()

  // Banner slider js start
  $('.zoom_left_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

  });

   //  Zoom Slider start
   var myCarousel = document.querySelector('#carouselExampleIndicators')
   var carousel = new bootstrap.Carousel(myCarousel, {
     interval: false,
     wrap: false
   })
  
// HIDE-SHOW TOGGLE TAB
$(function(){
 
  $('.hide_show').click(function(){
      $('.btn_budy').toggle();
  });
  


// STICK MENU/ MENU
var navoff=$('#menu').offset().top;
// alert(navoff);
$(window).scroll(function(){
    var scroll=$(this).scrollTop();
    if(scroll>navoff){
        $('#menu').addClass('fix');
    }
    else{
        $('#menu').removeClass('fix');
    }
});

    // back to top

    $('.back-to-top').click(function () {
      $('html,body').animate({
          scrollTop: 0,
      });
  });

  $(window).on('scroll',function () {
      var scrolling2 = $(this).scrollTop();

      if (scrolling2 > 350) {
          $('.back-to-top').fadeIn();
      } else {
          $('.back-to-top').fadeOut()
      }
  });

})

  
$('.seller').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots:false,
    arrow:true,
    autoplaySpeed: 1000,
    nextArrow:'<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow:'<i class="fas fa-chevron-left pre-arrow"></i>',
    // vertical:true,
    fade:true,
  });

  // Become a vendor success_slider
  $('.success_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots:true,
    arrows:false,
    autoplaySpeed: 1000,
  });


  //ACCORDION
  $(".accordion-title").click(function () {
    $(".accordion-title").not(this).removeClass("open");
    $(".accordion-title").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });

  
  // Vendor page countDown js
  $('#abc').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime('%H <span>Hours</span> '));
  });
  $('#abcd').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime('%M <span>Minutes</span>'));
  });
  $('#abcde').countdown('2023/08/21', function (event) {
    $(this).html(event.strftime('%S <span>Seconds</span>'));
  });

  // ABOUT COUNTER UP JS START
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
