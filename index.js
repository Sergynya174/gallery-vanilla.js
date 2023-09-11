const slides = document.querySelectorAll(".slide");

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove("slide_active");
  });
};

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("slide_active");
  });
}
