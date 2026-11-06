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

  // Showcase live websites alongside the development packages.
  function setupPackageProjectShowcase() {
    const packageGrid = document.querySelector('#packages .pkg-grid');
    if (!packageGrid || document.querySelector('.package-project-showcase')) return;

    const showcase = document.createElement('div');
    showcase.className = 'package-project-showcase';
    showcase.innerHTML = `
      <div class="section-heading">
        <p>Work we've delivered</p>
        <h2>Websites built with our skills</h2>
        <p class="packages-note">Explore these live projects to see examples of the design and experiences our website development packages can deliver.</p>
      </div>
      <div class="project-grid">
        <article class="project-card">
          <div class="project-thumb drama"><span class="project-tag">Entertainment</span></div>
          <div class="project-body">
            <h3>Liklik Drama Website</h3>
            <p>A vibrant, media-focused website using visual storytelling to showcase entertainment in a clean, engaging experience.</p>
            <ul class="tech-list"><li>Landing page</li><li>Brand story</li><li>Responsive</li></ul>
            <div class="project-actions"><a href="https://jpakao1819-jpg.github.io/liklikdrama-website/" target="_blank" rel="noopener noreferrer">Visit Site</a></div>
          </div>
        </article>
        <article class="project-card">
          <div class="project-thumb solowara"><span class="project-tag">Community</span></div>
          <div class="project-body">
            <h3>PNG Solowara Guardian Youths</h3>
            <p>A community website that shares youth-driven initiatives and encourages people to get involved.</p>
            <ul class="tech-list"><li>Informative</li><li>Accessible</li><li>Modern UI</li></ul>
            <div class="project-actions"><a href="https://jpakao1819-jpg.github.io/png-solowara-guardian-youths/" target="_blank" rel="noopener noreferrer">Visit Site</a></div>
          </div>
        </article>
        <article class="project-card">
          <div class="project-thumb booking"><span class="project-tag">Travel</span></div>
          <div class="project-body">
            <h3>Port Moresby Nature Park Booking</h3>
            <p>A polished booking experience highlighting a destination with a premium design and clear visitor journey.</p>
            <ul class="tech-list"><li>Booking</li><li>Travel</li><li>Premium UI</li></ul>
            <div class="project-actions"><a href="https://jpakao1819-jpg.github.io/port-moresby-nature-park-booking/" target="_blank" rel="noopener noreferrer">Visit Site</a></div>
          </div>
        </article>
      </div>
    `;
    packageGrid.insertAdjacentElement('afterend', showcase);
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
          btn.querySelector('.toggle-label').textContent = 'See more…';
        } else {
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          btn.querySelector('.toggle-label').textContent = 'See less';
        }
      });
    });
  }

  // Initialize when DOM is ready
  function initialize() {
    updateYear();
    setupSmoothScroll();
    setupPackageToggles();
    setupPackageProjectShowcase();
    updateActiveNav();
  }

  // Add active nav link detection
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
