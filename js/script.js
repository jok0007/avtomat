document.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".popularSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".popular-button-next",
      prevEl: ".popular-button-prev",
    },
  });
});
