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

  // Place each built website inside the package it best demonstrates.
  function setupPackageExamples() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) projectsSection.remove();

    const projectsNavLink = document.querySelector('.nav-links a[href="#projects"]');
    if (projectsNavLink) projectsNavLink.remove();

    const projectsButton = document.querySelector('.hero-copy a[href="#projects"]');
    if (projectsButton) projectsButton.href = '#packages';

    const examplesByPackage = {
      'pkg-1': [
        {
          name: 'Liklik Drama Website',
          url: 'https://jpakao1819-jpg.github.io/liklikdrama-website/',
          description: 'Entertainment landing page with visual storytelling and responsive presentation.'
        },
        {
          name: 'PNG Solowara Guardian Youths',
          url: 'https://jpakao1819-jpg.github.io/png-solowara-guardian-youths/',
          description: 'Informative community website sharing youth-driven initiatives.'
        }
      ],
      'pkg-2': [
        {
          name: 'Port Moresby Nature Park Booking',
          url: 'https://jpakao1819-jpg.github.io/port-moresby-nature-park-booking/',
          description: 'A destination-focused website presenting a visitor booking experience.'
        }
      ]
    };

    Object.entries(examplesByPackage).forEach(([packageId, examples]) => {
      const packageCard = document.getElementById(packageId);
      if (!packageCard || packageCard.querySelector('.pkg-examples')) return;

      const exampleSection = document.createElement('div');
      exampleSection.className = 'pkg-note pkg-examples';
      const heading = document.createElement('strong');
      heading.textContent = 'Website examples';
      exampleSection.appendChild(heading);

      examples.forEach(example => {
        const item = document.createElement('p');
        item.className = 'pkg-example';
        const link = document.createElement('a');
        link.href = example.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = example.name;
        const description = document.createElement('span');
        description.textContent = ` — ${example.description}`;
        item.append(link, description);
        exampleSection.appendChild(item);
      });

      const highlights = packageCard.querySelector('.pkg-highlights');
      if (highlights) highlights.insertAdjacentElement('afterend', exampleSection);
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
          btn.querySelector('.toggle-label').textContent = 'See more…';
        } else {
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          btn.querySelector('.toggle-label').textContent = 'See less';
        }
      });
    });
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

  function initialize() {
    updateYear();
    setupPackageExamples();
    setupSmoothScroll();
    setupPackageToggles();
    updateActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
