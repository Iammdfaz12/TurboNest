const slider = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

const menuIcon = document.getElementById("ham-menu");
const closeIcon = document.getElementById("closeIcon");
const sideNav = document.querySelector(".side-nav");


//Slider Funtions

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slider.length > 0) {
    slider[slideIndex].classList.add("displaySlide");
    // intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slider.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slider.length - 1;
  }

  slider.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slider[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

//Responsive Navbar Function
menuIcon.addEventListener("click", function () {
  sideNav.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  sideNav.style.display = "none";
});
