// Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,/*Чтоб зациклить */
    // margin: 20,
    autoplay: true,
    autoplayTimeout: 6500,
    autoplayHoverPause: false,
    smartSpeed: 800,
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

$(document).ready(function(){
    $(".set > a").on("click", function(){
      if($(this).hasClass('active')){
        $(this).removeClass("active");
        $(this).siblings('.content').slideUp(200);
        $(".set > a span").removeClass("minus").addClass("plus");
      }else{
        $(".set > a span").removeClass("minus").addClass("plus");
        $(this).find("span").removeClass("plus").addClass("minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $('.content').slideUp(200);
        $(this).siblings('.content').slideDown(200);
      }    
    });
  });

