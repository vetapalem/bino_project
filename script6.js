// Add this to your existing <script> section

// Mouse Move 3D Parallax Effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Apply 3D effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const rotateY = (mouseX - 0.5) * 5;
        const rotateX = (mouseY - 0.5) * -5;
        hero.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    // Apply 3D effect to cards based on mouse position
    const cards = document.querySelectorAll('.category-card, .feature-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const relativeX = (e.clientX - cardCenterX) / (rect.width / 2);
        const relativeY = (e.clientY - cardCenterY) / (rect.height / 2);

        // Only apply subtle effect when not hovering
        if (!card.matches(':hover')) {
            card.style.transform = `
                perspective(800px) 
                rotateX(${relativeY * -2}deg) 
                rotateY(${relativeX * 2}deg) 
                translateZ(10px)
            `;
        }
    });
});

// Reset transforms on mouse leave
document.addEventListener('mouseleave', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }

    const cards = document.querySelectorAll('.category-card, .feature-card');
    cards.forEach(card => {
        if (!card.matches(':hover')) {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
        }
    });
});

// Add scroll indicator element
const scrollIndicator = document.createElement('div');
scrollIndicator.className = 'scroll-indicator';
scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
scrollIndicator.addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#categories').offsetTop - 80,
        behavior: 'smooth'
    });
});
document.body.appendChild(scrollIndicator);

// Show/hide scroll indicator based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.transform = 'perspective(500px) translateZ(0)';
    } else {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transform = 'perspective(500px) translateZ(-20px)';
    }
});

// Add hover sound effect for buttons (optional)
const buttons = document.querySelectorAll('.cta-button, .deal-button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        // Create subtle click sound effect (optional)
        if (typeof Audio !== 'undefined') {
            const hoverSound = new Audio();
            // You can add a subtle sound effect here
            // For now, we'll just add a visual feedback
        }

        // Add particle effect on hover
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
            `;

            const rect = button.getBoundingClientRect();
            particle.style.left = `${Math.random() * rect.width}px`;
            particle.style.top = `${Math.random() * rect.height}px`;

            button.appendChild(particle);

            // Animate particle
            particle.animate([
                {
                    transform: 'translateZ(0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translateZ(${Math.random() * 50 + 20}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
            }).onfinish = () => particle.remove();
        }
    });
});

// Add this CSS for the particle effect
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .cta-button, .deal-button {
        position: relative;
        overflow: hidden;
    }
    
    @keyframes particleFloat {
        0% {
            transform: translateZ(0) translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateZ(100px) translateY(-50px) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);







// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Animated Text
const searchExamples = [
    "restaurants near me",
    "best deals on flights",
    "emergency plumber",
    "luxury hotels in Paris",
    "local yoga classes",
    "concert tickets tonight",
    "car rental deals",
    "doctor appointment"
];

let currentExampleIndex = 0;
const animatedExample = document.getElementById('animatedExample');

function updateExample() {
    animatedExample.style.opacity = '0';
    setTimeout(() => {
        currentExampleIndex = (currentExampleIndex + 1) % searchExamples.length;
        animatedExample.textContent = searchExamples[currentExampleIndex];
        animatedExample.style.opacity = '1';
    }, 300);
}

setInterval(updateExample, 3000);

// Categories Data
const categories = [
    { icon: 'fa-store', label: 'Local Businesses', color: 'linear-gradient(135deg, #8b5cf6, #d946ef)' },
    { icon: 'fa-car', label: 'Transportation', color: 'linear-gradient(135deg, #3b82f6, #06b6d4)' },
    { icon: 'fa-utensils', label: 'Restaurants', color: 'linear-gradient(135deg, #10b981, #34d399)' },
    { icon: 'fa-hotel', label: 'Hotels', color: 'linear-gradient(135deg, #f59e0b, #f97316)' },
    { icon: 'fa-plane', label: 'Travel & Tours', color: 'linear-gradient(135deg, #ef4444, #ec4899)' },
    { icon: 'fa-briefcase', label: 'Home Services', color: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
    { icon: 'fa-users', label: 'Professional Services', color: 'linear-gradient(135deg, #14b8a6, #10b981)' },
    { icon: 'fa-heartbeat', label: 'Healthcare', color: 'linear-gradient(135deg, #f43f5e, #ef4444)' }
];

// Populate Categories
const categoriesGrid = document.querySelector('.categories-grid');
categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
                <div class="category-icon" style="background: ${category.color};">
                    <i class="fas ${category.icon}"></i>
                </div>
                <div class="category-name">${category.label}</div>
            `;
    categoriesGrid.appendChild(card);
});

// Features Data
const features = [
    { icon: 'fab fa-whatsapp', title: 'WhatsApp Native', desc: 'No app downloads needed. Search directly through WhatsApp.' },
    { icon: 'fa-bolt', title: 'Instant Results', desc: 'AI-powered responses in seconds, not hours.' },
    { icon: 'fa-globe', title: 'Global Coverage', desc: 'Search worldwide with local business integration.' },
    { icon: 'fa-shield-alt', title: 'Verified Results', desc: 'All businesses are verified for authenticity.' }
];

// Populate Features
const featuresGrid = document.querySelector('.features-grid');
features.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-desc">${feature.desc}</p>
            `;
    featuresGrid.appendChild(card);
});

// Steps Data
const steps = [
    { number: '1', title: 'Share Location', desc: 'Send your location via WhatsApp', example: '📍 Current location' },
    { number: '2', title: 'Describe What You Need', desc: 'Tell us what you\'re looking for', example: 'Looking for Italian restaurant with outdoor seating' },
    { number: '3', title: 'Get Instant Results', desc: 'Receive verified options instantly', example: '🍝 Here are 5 top-rated Italian restaurants near you...' }
];

// Populate Steps
const stepsGrid = document.querySelector('.steps-grid');
steps.forEach(step => {
    const card = document.createElement('div');
    card.className = 'step-card';
    card.innerHTML = `
                <div class="step-number">${step.number}</div>
                <h3 class="step-title">${step.title}</h3>
                <p class="step-desc">${step.desc}</p>
                <div class="step-example">${step.example}</div>
            `;
    stepsGrid.appendChild(card);
});

// Deals Data
const deals = [
    {
        id: 0,
        name: 'Mario\'s Pizzeria',
        deal: '30% Off Large Pizzas',
        rating: 4.8,
        time: '2 mins ago',
        distance: '1.2km away',
        color: 'linear-gradient(135deg, #f97316, #ef4444)'
    },
    {
        id: 1,
        name: 'Urban Fitness',
        deal: 'Free First Session',
        rating: 4.9,
        time: '1 min ago',
        distance: '0.8km away',
        color: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
    },
    {
        id: 2,
        name: 'TechFix Pro',
        deal: '50% Off Laptop Repair',
        rating: 4.7,
        time: 'Just now',
        distance: '2.1km away',
        color: 'linear-gradient(135deg, #10b981, #14b8a6)'
    }
];

// Populate Deals with Animation
const dealsGrid = document.querySelector('.deals-grid');
deals.forEach((deal, index) => {
    const card = document.createElement('div');
    card.className = 'deal-card';
    card.innerHTML = `
                <div class="deal-header" style="background: ${deal.color};">
                    ${deal.name}
                </div>
                <div class="deal-info">
                    <div class="deal-name">${deal.deal}</div>
                    <div class="deal-rating">
                        <i class="fas fa-star"></i>
                        <span>${deal.rating}</span>
                    </div>
                </div>
                <p class="deal-desc">Limited time offer for new customers</p>
                <div class="deal-meta">
                    <span>📍 ${deal.distance}</span>
                    <span>${deal.time}</span>
                </div>
                <button class="deal-button">Claim Deal</button>
            `;
    dealsGrid.appendChild(card);

    // Animate cards one by one
    setTimeout(() => {
        card.classList.add('animated');
    }, 500 * (index + 1));
});

// Benefits Data
const benefits = [
    { icon: '🎯', title: 'Targeted Deals', desc: 'Personalized offers based on your location and preferences' },
    { icon: '⚡', title: 'Real-Time Competition', desc: 'Businesses compete to give you the best prices' },
    { icon: '💰', title: 'Best Prices', desc: 'Guaranteed lowest prices through our bidding system' }
];

// Populate Benefits
const benefitsGrid = document.querySelector('.benefits-grid');
benefits.forEach(benefit => {
    const card = document.createElement('div');
    card.className = 'benefit-card';
    card.innerHTML = `
                <div class="benefit-icon">${benefit.icon}</div>
                <h3 class="benefit-title">${benefit.title}</h3>
                <p class="benefit-desc">${benefit.desc}</p>
            `;
    benefitsGrid.appendChild(card);
});

// Travel Services Data
const travelServices = [
    { icon: 'fa-plane', title: 'Flight Bookings', query: 'Flights to Tokyo next week' },
    { icon: 'fa-hotel', title: 'Hotels & Stays', query: 'Beachfront hotels in Bali' },
    { icon: 'fa-car', title: 'Local Transport', query: 'Airport transfer to downtown' },
    { icon: 'fa-compass', title: 'Local Experiences', query: 'Authentic cooking classes' }
];

// Populate Travel Services
const travelGrid = document.querySelector('.travel-grid');
travelServices.forEach(service => {
    const card = document.createElement('div');
    card.className = 'travel-card';
    card.innerHTML = `
                <div class="travel-icon">
                    <i class="fas ${service.icon}"></i>
                </div>
                <h3 class="travel-title">${service.title}</h3>
                <div class="travel-query">
                    <i class="fas fa-comment-alt text-blue-400 mr-2"></i>
                    ${service.query}
                </div>
            `;
    travelGrid.appendChild(card);
});

// Animated Counters
const counters = document.querySelectorAll('.stat-number[data-count]');

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.textContent = target + (counter.getAttribute('data-count') === '100000' ? '+' : '');
            clearInterval(timer);
        } else {
            counter.textContent = Math.floor(current) + (counter.getAttribute('data-count') === '100000' ? '+' : '');
        }
    }, 16);
}

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation to cards
const animatedCards = document.querySelectorAll('.category-card, .feature-card, .step-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animatedCards.forEach(card => {
    card.style.opacity = '0';
    cardObserver.observe(card);
});
