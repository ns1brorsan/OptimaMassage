document.addEventListener('DOMContentLoaded', function () {
  // Slideshow
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  if (slides.length > 0) {
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 4000);
  }

  // Scroll to top button
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // "Visa mer" button for treatments
  const moreBtn = document.getElementById('show-more');
  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      document.querySelectorAll('.extra-treatment').forEach(t => t.style.display = 'block');
      moreBtn.style.display = 'none';
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});
