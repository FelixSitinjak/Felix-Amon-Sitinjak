// Smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a => a.addEventListener('click', e => {
  const href = a.getAttribute('href');
  const target = document.querySelector(href);
  if (href.length > 1 && target) {
    e.preventDefault();
    target.scrollIntoView({ behavior:'smooth', block:'start' });
  }
}));

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Intersection Observer reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .2 });

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

// Portfolio filter
const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('.project');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const f = chip.getAttribute('data-filter');
  projects.forEach(p => {
    const show = f === 'all' || p.getAttribute('data-cat') === f;
    p.style.display = show ? '' : 'none';
  });
}));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax tilt for 3D card
const card3d = document.querySelector('.card-3d');
if (card3d) {
  card3d.addEventListener('mousemove', (e) => {
    const r = card3d.getBoundingClientRect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    const rx = ((cy / r.height) - 0.5) * -8;
    const ry = ((cx / r.width) - 0.5) * 12;
    card3d.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card3d.addEventListener('mouseleave', () => {
    card3d.style.transform = 'rotateX(0) rotateY(0)';
  });
}
