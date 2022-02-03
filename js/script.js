let sideBar = document.querySelector(".side-bar");
document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle("active");
};

document.querySelector("#close-side-bar").onclick = () => {
  sideBar.classList.remove("active");
};
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  accordion.onclick = () => {
    accordion.classList.toggle("active");
  };
});
var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
