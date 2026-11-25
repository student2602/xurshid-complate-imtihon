const toggle = document.querySelector('.header__toggle');
const panel = document.querySelector('.header__panel');
const overlay = document.querySelector('.header__overlay');
const navLinks = panel.querySelectorAll('.header__nav a');

function setMenuOpen(open) {
  panel.classList.toggle('header__panel--open', open);
  overlay.classList.toggle('header__overlay--open', open);
  toggle.classList.toggle('header__toggle--open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

toggle.addEventListener('click', () => {
  setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
});

overlay.addEventListener('click', () => setMenuOpen(false));
navLinks.forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});
