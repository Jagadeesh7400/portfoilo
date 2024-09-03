let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');  
};

/* */
/*Get the modal*/
const modal = document.getElementById("myModal");

/* Get the button that opens the modal*/
const openModalBtn = document.getElementById("openModalBtn");

/* Get the buttons that close the modal*/
const closeModalBtn = document.getElementsByClassName("close-btn")[0];
const closeModalFooterBtn = document.getElementById("closeModalBtn");

/* When the user clicks the button, open the modal*/
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

/* When the user clicks on <span> (x) or the close button in the footer, close the modal*/
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

closeModalFooterBtn.onclick = function() {
  modal.style.display = "none";
}

/* When the user clicks anywhere outside of the modal, close it*/
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

/* */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200  
});

ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});

/* */
const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'Data Analyst', 'Digital Creator'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true
});
