// Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,/*Чтоб зациклить */
    // margin: 20,
    // autoplay: true,
    // autoplayTimeout: 6500,
    // autoplayHoverPause:false,
    // animateOut: 'fadeOut',
    startPosition: 1, /*какой элемент будет активный*/
    items: 1,//Количество слайдов
    responsive : {
        540: {
            items: 1,
        },
        1200: {
            // margin: 30,
            items: 1,
        },
}})

