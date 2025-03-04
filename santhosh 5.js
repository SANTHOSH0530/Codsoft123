// Scroll to Contact Section smoothly
document.getElementById("cta-button").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Particle background effect - Mouse move interaction
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    heroSection.style.backgroundPosition = ${x * 100}% ${y * 100}%;
});

// Testimonial Carousel (auto-slide)
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.opacity = 1;
}, 4000);

// Initialize AOS (Animations)
AOS.init();

// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email) {
        alert("Thank you for subscribing!");
        document.getElementById("email").value = ""; // Clear the input
    } else {
        alert("Please enter a valid email address.");
    }
});