/* ─────────────────────────────────────────
   PORTFOLIO — main.js
   ───────────────────────────────────────── */

/* ── Hamburger menu ── */
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    ham.classList.remove('open');
    mob.classList.remove('open');
  });
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('up');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

// Hero elements fire immediately on load
setTimeout(() => {
  document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('up'));
}, 80);

/* ── Desktop cursor-follow project previews ── */
const isMobile = () => window.innerWidth <= 860;

document.querySelectorAll('.project-row').forEach(row => {
  const previewId = row.dataset.preview;
  if (!previewId) return;
  const preview = document.getElementById(previewId);
  if (!preview) return;

  row.addEventListener('mouseenter', () => {
    if (isMobile()) return;
    preview.classList.add('active');
  });

  row.addEventListener('mouseleave', () => {
    preview.classList.remove('active');
  });

  row.addEventListener('mousemove', e => {
    if (isMobile()) return;
    // keep preview inside viewport horizontally
    const offset = 48;
    const previewW = 280;
    const x = e.clientX + offset + previewW > window.innerWidth
      ? e.clientX - previewW - offset
      : e.clientX + offset;

    preview.style.left = x + 'px';
    preview.style.top  = e.clientY + 'px';
  });
});

/* ── Disable right-click ── */
document.addEventListener('contextmenu', e => e.preventDefault());

/* ── Respect reduced motion ── */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('up'));
}
