
let slideIndex = 1;
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.querySelector(".caption-container p");

    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    

    // Remove active class from all thumbnails
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected slide
    slides[slideIndex - 1].style.display = "block";  

    // Highlight the selected thumbnail
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    } else {
        captionText.innerHTML = slides[slideIndex - 1].querySelector("img").alt;
    }
}


showSlides(slideIndex);

// Next/previous controls
function changeSlides(n) {
    showSlides(slideIndex += n);
}
/*

// Thumbnail image controls (optional thumbnails)
function currentSlide(n) {
    showSlides(slideIndex = n);
}
    */