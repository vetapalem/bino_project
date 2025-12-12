document.addEventListener('DOMContentLoaded', function () {
    const pageLinks = document.querySelectorAll('.page-link');
    const pages = document.querySelectorAll('.page');

    pageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links and pages
            pageLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Show corresponding page
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
        });
    });

    // function sender() {

    //     const contactForm = document.getElementById('contactForm');
    //     if (contactForm) {
    //         contactForm.addEventListener('submit', function (e) {
    //             e.preventDefault();

    //             const name = document.getElementById('name').value;
    //             const email = document.getElementById('email').value;
    //             const message = document.getElementById('message').value;

    //             // Validate form
    //             if (!name || !email || !message) {
    //                 alert('Please fill in all fields.');
    //                 return;
    //             }

    //             // Create mailto link
    //             const subject = encodeURIComponent('Contact Form Message');
    //             const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    //             const mailtoLink = `mailto:krishnapostgraduation@gmail.com?subject=${subject}&body=${body}`;

    //             // Open default email client
    //             window.location.href = mailtoLink;
    //         });
    //     }
    // }
    // Handle form submission for mailto
});
