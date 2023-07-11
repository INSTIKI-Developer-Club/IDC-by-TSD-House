// toggle dark mode

// aos js
AOS.init();

// navbar
let hamburgerMenu = document.querySelector(".hamburger-menu");
let navbarItems = document.querySelector(".navbar-items");
hamburgerMenu.addEventListener("click", () => {
  if (navbarItems.classList.contains("-translate-y-[150%]")) {
    navbarItems.classList.remove("-translate-y-[150%]");
  } else {
    navbarItems.classList.add("-translate-y-[150%]");
  }
});

// swiper js
var swiper = new Swiper(".mySwiper-section6", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
