var swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView:1,
  breakpoints: {
    510: {
      slidesPerView: 1.5,
    },
    // 768px以上の場合
    850: {
      slidesPerView: 2.5,
    },
    // 980px以上の場合
    1200: {
      slidesPerView: 3.5,
    },
    // 1200px以上の場合
    1540: {
      slidesPerView: 4.5,
    }
  },
});

