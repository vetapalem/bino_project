// Initialize GSAP and plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.custom-cursor.follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;
const easeFactor = 0.15;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * easeFactor;
    followerY += (mouseY - followerY) * easeFactor;

    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
}

animateFollower();

// Add hover effect on interactive elements
document.querySelectorAll('a, button, .example-query, .category-badge').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    // Navbar effect
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }

    // Scroll to top button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top function
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp button effect
document.querySelectorAll('.whatsapp-gradient').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            scale: 1.05,
            boxShadow: '0 10px 25px rgba(38, 166, 154, 0.4)',
            duration: 0.3
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            scale: 1,
            boxShadow: 'none',
            duration: 0.3
        });
    });
});

// Category cards animation
gsap.utils.toArray('.category-badge').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.05,
        ease: "power2.out"
    });
});

// Feature cards animation
gsap.utils.toArray('.glass-card').forEach((card, i) => {
    // Skip category cards and search flow cards
    if (!card.classList.contains('category-badge') && !card.classList.contains('search-flow-card')) {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power2.out"
        });
    }
});

// Search flow cards animation
gsap.utils.toArray('.search-flow-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none"
        },
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.7,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// Animate example queries
gsap.utils.toArray('.example-query').forEach((query, i) => {
    gsap.from(query, {
        scrollTrigger: {
            trigger: query,
            start: "top bottom-=150",
            toggleActions: "play none none none"
        },
        opacity: 0,
        x: -30,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// Typing indicator animation
function animateTyping() {
    const typingContainer = document.querySelector('.typing-container');
    if (typingContainer) {
        typingContainer.style.opacity = '1';
    }
}

setTimeout(animateTyping, 3000);

// Animate CTA section
const ctaSection = document.querySelector('#get-started');
if (ctaSection) {
    gsap.from(ctaSection, {
        scrollTrigger: {
            trigger: ctaSection,
            start: "top bottom-=100",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
    });
}

// Initialize particles background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-bg';
    document.body.appendChild(particlesContainer);

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
        particle.style.width = `${Math.random() * 8 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

// Initialize animations on page load
window.addEventListener('load', () => {
    createParticles();

    // Fade in hero content
    gsap.from('.animate-fade-in', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Animate chat messages sequentially
    gsap.utils.toArray('.chat-message').forEach((message, i) => {
        gsap.to(message, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: i * 0.2,
            ease: "power2.out"
        });
    });
});
