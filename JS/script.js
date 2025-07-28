const slider = document.querySelector(".slider ul");
const slides = document.querySelectorAll(".slider li");
const totalSlides = slides.length;
let currentIndex = 0;

function moveToNextSlide() {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

setInterval(moveToNextSlide, 5000); // cada 5 segundos
