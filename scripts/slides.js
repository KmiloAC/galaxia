const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll('.hero-features');
let currentIndex = 0;
let intervalId;

var sliderNav = function (manual) { 
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    currentIndex = manual;
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
        resetInterval();
    });
});

function autoSlide() {
    currentIndex = (currentIndex + 1) % btns.length;
    sliderNav(currentIndex);
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(autoSlide, 5000); // Cambia el intervalo según sea necesario
}

resetInterval(); // Inicializar el intervalo al cargar la página
