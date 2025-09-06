document.addEventListener('DOMContentLoaded', () => {
  // Fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => fadeObserver.observe(el));

  // Project overlays
  const projectItems = document.querySelectorAll('.project-item');
  const overlayObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible-overlay');
      else entry.target.classList.remove('visible-overlay');
    });
  }, { threshold: 0.5 });
  projectItems.forEach(item => overlayObserver.observe(item));
});

// Toggle hamburger menu
function toggleMenu(x) {
  x.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
}
