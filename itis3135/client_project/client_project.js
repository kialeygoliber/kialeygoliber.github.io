function changePage(url) {

    window.location.href = url;

}


//CONTACT US- page submit button "submits form"

function SubmitContactForm(event) {

    event.preventDefault();
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
    }, 
    document.getElementById("contact-message").textContent = "Thanks for the Info! Dylan or a team member will be in touch soon!!");
    document.getElementById("contact-form").style.display = "none";
}

//TESTIMONIALS- slideshow with arrows (moves automatically)

const boxes = document.querySelectorAll(".box");
let currentIndex = 0;

function updateBoxes() {
    for (let i = 0; i < boxes.length; i++ ) {
        boxes[i].classList.remove("active", "next", "previous");

        if (i === currentIndex) {
            boxes[i].classList.add("active");
        } else if (i === (currentIndex + 1) % boxes.length) {
            boxes[i].classList.add("next");
        } else if (i === (currentIndex - 1 + boxes.length) % boxes.length) {
            boxes[i].classList.add("previous");
        }
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % boxes.length;
    updateBoxes();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    updateBoxes();
}

setInterval(nextSlide, 5000);
updateBoxes();

//HOME PAGE- Accordian Style paragpraphs

let clicked = false;

function dropdown(className) {
    const section = document.querySelector("." + className);
    section.classList.toggle("inactive");
    
}
