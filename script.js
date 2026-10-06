// Ensure page loads properly
(function() {
  'use strict';

  // Update footer year
  function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Smooth scroll behavior for anchor links
  function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // "See more / See less" toggles for package cards
  function setupPackageToggles() {
    const toggles = document.querySelectorAll('.pkg-toggle');
    toggles.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const targetId = btn.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        if (!panel) return;

        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          panel.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
          btn.querySelector('.toggle-label').textContent = 'See more\u2026';
        } else {
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          btn.querySelector('.toggle-label').textContent = 'See less';
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateYear();
      setupSmoothScroll();
      setupPackageToggles();
    });
  } else {
    updateYear();
    setupSmoothScroll();
    setupPackageToggles();
  }

  // Add active nav link detection
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
        }
      });
    });
  }

  if (document.readyState !== 'loading') {
    updateActiveNav();
  } else {
    document.addEventListener('DOMContentLoaded', updateActiveNav);
  }
})();