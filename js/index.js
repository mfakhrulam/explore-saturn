// Navbar hover and active
let navbar = document.getElementById("top-nav-bar");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("top-nav-bar").offsetHeight;
let navbarLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", (e) => {
  scrollpos = window.scrollY;
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scrollpos + 100 &&
      section.offsetTop + section.offsetHeight > scrollpos + 100
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Slider
window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const images = [
    "img/saturn-hero-1.jpg",
    "img/saturn-hero-2.webp",
    "img/saturn-hero-3.webp",
  ];
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Saturnus Image Hero";
    imgElement.style.objectFit = "contain";
    slider.appendChild(imgElement);
  });
  let currentIndex = 0;
  function updateSlider(index) {
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  document.querySelector(".prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider(currentIndex);
    } else {
      currentIndex = images.length - 1;
      updateSlider(currentIndex);
    }
  });

  document.querySelector(".next").addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateSlider(currentIndex);
    } else {
      currentIndex = 0;
      updateSlider(currentIndex);
    }
  });
});

// Nav Menu
let navLinks = document.getElementById("navlinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Scroll button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  toggleScrollToTopBtn();
};

function toggleScrollToTopBtn() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
