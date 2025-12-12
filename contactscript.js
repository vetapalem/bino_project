document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Recipient email (CHANGE THIS TO YOUR EMAIL)
    const recipientEmail = 'krishnapostgraduation@gmail.com';

    // Encode subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optional: Show a confirmation message
    setTimeout(() => {
        alert('Your email client should have opened. Please review and send the email from there.');
    }, 300);
});

// Optional: Form validation feedback
const formInputs = document.querySelectorAll('#emailForm input, #emailForm textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
});
