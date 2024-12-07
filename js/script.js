// Toggle Menu Icon and Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight Active Navigation Link on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking a navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Modal Functionality for Services Section

// Get modal buttons and modals
const webDevModal = document.getElementById("webDevModal");
const dataAnalystModal = document.getElementById("dataAnalystModal");
const graphicDesignModal = document.getElementById("graphicDesignModal");

const webDevModalBtn = document.getElementById("webDevModalBtn");
const dataAnalystModalBtn = document.getElementById("dataAnalystModalBtn");
const graphicDesignModalBtn = document.getElementById("graphicDesignModalBtn");

const closeButtons = document.querySelectorAll(".close-btn");

// Function to open a modal
function openModal(modal) {
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Open specific modals on button clicks
webDevModalBtn.addEventListener("click", () => openModal(webDevModal));
dataAnalystModalBtn.addEventListener("click", () => openModal(dataAnalystModal));
graphicDesignModalBtn.addEventListener("click", () => openModal(graphicDesignModal));

// Close modal on close button click
closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});

// Close modal when clicking outside modal content
window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});

// Scroll Reveal Animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typing Animation for Multiple Text
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Data Analyst', 'Digital Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
