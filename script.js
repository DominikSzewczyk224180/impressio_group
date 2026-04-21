// ========== Nav scroll effect ==========
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ========== Reveal on scroll ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ========== Smooth scroll dla anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========== Mobile menu toggle ==========
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    if (isOpen) {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--paper)';
      navLinks.style.padding = '20px';
      navLinks.style.borderBottom = '1px solid var(--line)';
      navLinks.style.gap = '16px';
    }
  });

  // Zamknij menu po kliknięciu w link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 640) {
        navLinks.style.display = 'none';
      }
    });
  });
}
