document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('trilha-sonora');
    const playButton = document.getElementById('botao-play');

    playButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        if (audio.paused) {
            audio.play();
            playButton.classList.add('playing'); // Adiciona uma classe para mudar o botão se necessário
        } else {
            audio.pause();
            playButton.classList.remove('playing'); // Remove a classe se o áudio estiver pausado
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("contato-slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}



// JavaScript para adicionar a classe 'visible' quando o elemento entra na viewport
const fadeElements = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeElements.forEach(element => {
    observer.observe(element);
});


