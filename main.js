// Language detection and ISO certification links
function detectLanguage() {
  // Check URL path for language indicator
  const path = window.location.pathname;
  if (path.includes('/zh/') || path.includes('/zh-cn/') || path.includes('/cn/')) {
    return 'zh';
  }
  if (path.includes('/en/')) {
    return 'en';
  }

  // Check HTML lang attribute
  const htmlLang = document.documentElement.lang;
  if (htmlLang && htmlLang.toLowerCase().startsWith('zh')) {
    return 'zh';
  }
  if (htmlLang && htmlLang.toLowerCase().startsWith('en')) {
    return 'en';
  }

  // Check browser language as fallback
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.toLowerCase().startsWith('zh')) {
    return 'zh';
  }

  // Default to English
  return 'en';
}

// Update ISO certification links based on language
function updateIsoCertLinks() {
  const lang = detectLanguage();
  const isoLinks = document.querySelectorAll('.iso-cert-link');
  const certPath = './assets/certifications/'; // Centralized path configuration

  isoLinks.forEach(link => {
    const enFile = link.getAttribute('data-en');
    const zhFile = link.getAttribute('data-zh');

    // Set the appropriate file based on language
    const targetFile = lang === 'zh' ? zhFile : enFile;
    link.setAttribute('href', `${certPath}${targetFile}`);
  });
}

// Initialize ISO cert links on page load
document.addEventListener('DOMContentLoaded', updateIsoCertLinks);

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
