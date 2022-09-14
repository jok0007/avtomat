document.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });  
});

