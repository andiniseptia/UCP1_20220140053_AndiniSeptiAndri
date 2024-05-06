function showAlert() {
    let tanggal = new Date();
    alert("Kalau kalian kegiatannya apa aja nih?\n" + tanggal);
    document.getElementById("hasil").innerHTML = tanggal;
}

function nextSlide() {
    let currentSlide = document.querySelector('.carousel-item.active');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = currentSlide.parentElement.firstElementChild;
    }
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
}

function prevSlide() {
    let currentSlide = document.querySelector('.carousel-item.active');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = currentSlide.parentElement.lastElementChild;
    }
    currentSlide.classList.remove('active');
    prevSlide.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("carousel-item");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
});
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}
