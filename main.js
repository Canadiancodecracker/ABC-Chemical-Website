
// Mobile nav toggle
const btn = document.getElementById('menuBtn');
const panel = document.getElementById('mobileNav');
btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', String(!expanded));
  panel.classList.toggle('hidden');
});
// Contact form feedback
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = 'Thanks — your request has been noted. Our team will get back shortly.';
  form.reset();
});
// Footer year
document.getElementById('y').textContent = new Date().getFullYear();
