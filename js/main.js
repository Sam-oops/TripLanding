//Carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
      center: true,
      loop: true,
      margin: 30, 
      startPosition: 1,
      items: 1,
    responsive : {
    // breakpoint from 0 up
    460 : {
        items: 2,
    },
    650 : {
        items: 3,
    },
    850 : {
        items : 2,
    },
    1000 : {
        margin : 20,
        items : 3,
    },
    1200 : {
        margin : 30,
        items : 3,
    },
}
  });
$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

//button toggle

const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon"); 

navBtn.onclick = function(){
    nav.classList.toggle("nav--mobile");
    menuIcon.classList.toggle('menu-icon--active');
}