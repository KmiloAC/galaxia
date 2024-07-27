const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll('.hero-features');
let currentIndex = 0;
let intervalId;

const sliderNav = function(manual) { 
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

// Swipe functionality
let startX;
document.querySelector('.hero').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector('.hero').addEventListener('touchmove', (e) => {
    if (!startX) return;
    let currentX = e.touches[0].clientX;
    let diffX = startX - currentX;

    if (diffX > 50) {
        currentIndex = (currentIndex + 1) % btns.length;
        sliderNav(currentIndex);
        resetInterval();
        startX = null;
    } else if (diffX < -50) {
        currentIndex = (currentIndex - 1 + btns.length) % btns.length;
        sliderNav(currentIndex);
        resetInterval();
        startX = null;
    }
});

//Cambio de color
window.addEventListener('scroll', function() {
    const socialIcons = document.querySelector('.social-networks');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 250) { // Cambia este valor según tus necesidades
      socialIcons.classList.add('scroll');
    } else {
      socialIcons.classList.remove('scroll');
    }
  });
  

  //Al dar click en la flecha hara un scroll hasta el final de la pagina principal
  function scrollToBottom() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }