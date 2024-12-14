function showMessage() {
    alert('Thank you for joining FitLife Gym! We will contact you soon.');
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});
