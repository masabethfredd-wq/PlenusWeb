/* ==================== MENU SHOW Y HIDDEN ==================== */
const navToggle = document.getElementById('nav-toggle'),
    navMenu = document.querySelector('.nav-list'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.toggle('show-menu')
        // Simple class toggle strategy for mobile menu
        navMenu.style.right = navMenu.style.right === '0px' ? '-100%' : '0px';
    })
}

/* ==================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    // Resetting the inline style we set above
    document.querySelector('.nav-list').style.right = '-100%';
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==================== CHANGE BACKGROUND HEADER ==================== */
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ==================== SCROLL REVEAL ANIMATION ==================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

// Hero Section
sr.reveal('.home-data')

// About Us (Dynamic Directions)
sr.reveal('.about-img', { origin: 'right', delay: 500 })
sr.reveal('.about-data', { origin: 'left', delay: 500 })

// Value Proposition
sr.reveal('.proposition-content', { origin: 'bottom', delay: 300 })

// Development Axes (Staggered from Bottom)
sr.reveal('.axis-card', {
    origin: 'bottom',
    interval: 200 // Stagger effect: 200ms between each card
})

// Services (Staggered from Bottom)
sr.reveal('.section-header', { origin: 'top' })
sr.reveal('.service-card', {
    origin: 'bottom',
    interval: 200
})

// Team & Testimonials
sr.reveal('.team-member', { interval: 200, origin: 'bottom' })
sr.reveal('.testimonial-content', { origin: 'left', delay: 400 })

// Footer
sr.reveal('.footer-container', { origin: 'bottom' })

/* ==================== SERVICES FLEX CARDS INTERACTIVITY ==================== */
const serviceCards = document.querySelectorAll('.service-card')

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        if (!card.classList.contains('active')) {
            serviceCards.forEach(c => c.classList.remove('active'))
            card.classList.add('active')
        }
    })

    // Optional: Hover support for desktop
    card.addEventListener('mouseenter', () => {
        if (window.innerWidth > 968) {
            serviceCards.forEach(c => c.classList.remove('active'))
            card.classList.add('active')
        }
    })
})
