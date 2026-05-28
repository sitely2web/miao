/* Nav — scroll state */
const nav = document.getElementById('nav');
const heroEl = document.getElementById('hero');

const navObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
  { threshold: 0.1 }
);
navObserver.observe(heroEl);

/* Nav — mobile toggle */
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* Reveal — IntersectionObserver */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

/* Stagger siblings within the same parent */
document.querySelectorAll('.hero__content, .menu__left, .menu__step, .menu__extras, .review, .find-us__info, .find-us__map, .space__content').forEach(parent => {
  const children = parent.querySelectorAll('.reveal');
  children.forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });
});

reveals.forEach(el => revealObserver.observe(el));

/* Hero reveals on load */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero__content .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), 300 + i * 120);
  });
});

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
