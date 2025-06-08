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

  // "Visa mer" and "Visa mindre" buttons for treatments
  const moreBtn = document.getElementById('show-more');
  const lessBtn = document.getElementById('show-less');
  const treatmentGrid = document.querySelector('.treatment-grid');
  if (moreBtn && lessBtn && treatmentGrid) {
    moreBtn.addEventListener('click', () => {
      treatmentGrid.classList.add('show-all');
      moreBtn.style.display = 'none';
      lessBtn.style.display = 'block';
    });
    lessBtn.addEventListener('click', () => {
      treatmentGrid.classList.remove('show-all');
      lessBtn.style.display = 'none';
      moreBtn.style.display = 'block';
      moreBtn.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });
  }
});
