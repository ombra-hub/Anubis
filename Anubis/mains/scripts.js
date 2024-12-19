// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Feature Card Hover Animation
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Hero Section Fade-in Effect
window.addEventListener('load', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.style.opacity = '1';
    heroSection.style.transition = 'opacity 2s ease-in-out';
});

// Scroll Animation for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');
window.addEventListener('scroll', () => {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
        }
    });
});

