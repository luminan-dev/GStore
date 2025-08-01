var swiper = new Swiper(".intro-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper2 = new Swiper(".intro-bottom-swiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1.2,
    },
  }, 
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper3 = new Swiper(".smartphones-swiper", {
  slidesPerView: 4,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  }, 
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      530:{
        slidesPerView: 2,
      },
      640:{
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
