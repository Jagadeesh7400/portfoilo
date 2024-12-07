// Menu Icon and Navbar Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Navigation Active Link and Sticky Navbar */
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

  // Remove toggle icon and navbar when clicking navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* Modal Functionality for About Me and Services */
const myModal = document.getElementById("myModal");
const webDevModal = document.getElementById("webDevModal");
const dataAnalystModal = document.getElementById("dataAnalystModal");
const graphicDesignModal = document.getElementById("graphicDesignModal");

// Get the buttons that open the modals
const openModalBtn = document.getElementById("openModalBtn");
const webDevModalBtn = document.getElementById("webDevModalBtn");
const dataAnalystModalBtn = document.getElementById("dataAnalystModalBtn");
const graphicDesignModalBtn = document.getElementById("graphicDesignModalBtn");

// Get the buttons that close the modals
const closeModalBtns = document.querySelectorAll(".close-btn");
const contactCloseBtns = document.querySelectorAll(".modal-footer .btn");

// Function to open a modal
function openModal(modal) {
  modal.style.display = "block";
}

// Function to close a modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Open modals for specific services and About Me
openModalBtn.onclick = function () {
  openModal(myModal);
};
webDevModalBtn.onclick = function () {
  openModal(webDevModal);
};
dataAnalystModalBtn.onclick = function () {
  openModal(dataAnalystModal);
};
graphicDesignModalBtn.onclick = function () {
  openModal(graphicDesignModal);
};

// Close modal on close button click
closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Close modal on "Contact Me!" button click
contactCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target === myModal || event.target === webDevModal || event.target === dataAnalystModal || event.target === graphicDesignModal) {
    event.target.style.display = "none";
  }
};

/* ScrollReveal Animation */
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

// Typed.js Animation
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Data Analyst', 'Digital Creator'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true
});
