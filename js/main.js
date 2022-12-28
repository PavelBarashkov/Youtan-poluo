// Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,/*Чтоб зациклить */
    // margin: 10,
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

// Nav icon

const btnNav = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

btnNav.onclick = function() {
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon--active');
  document.body.classList.toggle('no-scroll');
}


$('.new-slider').owlCarousel({
  nav: true,
  items:1,
  loop: false,
  center:true,
  autoplay: false,
  margin:10,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash'
});


$(document).ready(function(){
    $(".set > a").on("click", function(){
      if($(this).hasClass('active')){
        $(this).removeClass("active");
        $(this).siblings('.content').slideUp(300);
        $(".set > a span").removeClass("minus").addClass("plus");
      }else{
        $(".set > a span").removeClass("minus").addClass("plus");
        $(this).find("span").removeClass("plus").addClass("minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $('.content').slideUp(200);
        $(this).siblings('.content').slideDown(300);
      }    
    });
  });


  //--------------------------------------

// let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
// let popup = document.querySelector('.popup'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

// openPopupButtons.forEach((button) => { // Перебираем все кнопки
//   button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//       e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//       popupBg.classList.add('active'); // Добавляем класс 'active' для фона
//       popup.classList.add('active'); // И для самого окна
//   })
// })

// closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
//   popupBg.classList.remove('active'); // Убираем активный класс с фона
//   popup.classList.remove('active'); // И с окна
//   console.log('закрыли')
// });


// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//   if(e.target === popupBg) { // Если цель клика - фот, то:
//       popupBg.classList.remove('active'); // Убираем активный класс с фона
//       popup.classList.remove('active'); // И с окна
//   }
//   console.log('закрыли 2')
// });





