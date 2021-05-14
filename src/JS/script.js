// Slider
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// Menu burger

$(".fa-bars").on("click", function () {
  $("#burger").toggleClass("show");
});
