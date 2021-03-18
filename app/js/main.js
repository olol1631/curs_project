// //slick-slider
// $(function(){
//     $('.offers__slider').slick({
//         autoplay: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         prevArrow:'<button type="button" class="slick-prev"><img src="images/pre.svg" alt="pre"></button>',
//         nextArrow:'<button type="button" class="slick-next"><img src="images/next.svg" alt="pre"></button>',
//     });
// });

// let arrow=document.querySelectorAll('.arrow');
// for(i=0; i<arrow.length; i++){
//         let thisLink=arrow[i].previousElementSibling;
//         let subMenu=arrow[i].nextElementSibling;
//         let thisArrow=arrow[i];

//         thisLink.classList.add('parent');
//     arrow[i].addEventListener('click', function(){
//         subMenu.classList.toggle('open');
//         thisArrow.classList.toggle('active');
//     });
// }
$(document).ready(function(){
    $('.menu__burger').click(function(event){
        $('.menu__burger,.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.product__filter-title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    })

    //slider
    new Swiper('.banner-container', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
      new Swiper('.brands-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        breakpoints: {
          640:{
            slidesPerView: 4,
          },
          760: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 6,
          },
        }
          
      });
      new Swiper('.new-container', {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          640:{
            slidesPerView: 3,
          },
          768:{
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
        }
      });
});