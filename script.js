// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle menu on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (useful for single-page scrolling)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    // In a real backend, you'd send the data here.
    // For this static site, we provide visual feedback:
    alert('Message sent! Thanks for reaching out. I will get back to you shortly.');
    
    // Clear the form fields
    contactForm.reset();
});