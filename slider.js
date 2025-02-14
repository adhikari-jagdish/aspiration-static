const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

console.log('JS initialized');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
        dots[i].classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds