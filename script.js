document.addEventListener('DOMContentLoaded', function () {
    // Handle the demo buttons on every page.
    const alertButtons = document.querySelectorAll('[data-alert]');

    alertButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log('Chai Haven Cafe button clicked');
            window.alert(button.getAttribute('data-alert'));
        });
    });

    // Show a demo confirmation when the contact form is submitted.
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            window.alert('Thank you! Your demo message has been received on this page.');
            contactForm.reset();
        });
    }
});
