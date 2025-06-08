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
  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      document.querySelectorAll('.extra-treatment').forEach(t => t.style.display = 'block');
      moreBtn.style.display = 'none';
      if (lessBtn) lessBtn.style.display = 'block';
    });
  }
  if (lessBtn) {
    lessBtn.addEventListener('click', () => {
      document.querySelectorAll('.extra-treatment').forEach(t => t.style.display = 'none');
      lessBtn.style.display = 'none';
      if (moreBtn) moreBtn.style.display = 'block';
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
