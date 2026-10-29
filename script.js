// const toggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('#primary-nav');
// if (toggle && nav) {
//   toggle.addEventListener('click', () => {
//     const isOpen = toggle.getAttribute('aria-expanded') === 'true';
//     toggle.setAttribute('aria-expanded', String(!isOpen));
//     nav.classList.toggle('open', !isOpen);
//   });
//   nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
//     nav.classList.remove('open');
//     toggle.setAttribute('aria-expanded', 'false');
//   }));
// }
// const year = document.querySelector('#year');
// if (year) year.textContent = new Date().getFullYear();


(() => {
  'use strict';

  const init = () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#primary-nav');
    const year = document.querySelector('#year');

    if (year) {
      year.textContent = String(new Date().getFullYear());
    }

    if (!toggle || !nav) return;

    const closeMenu = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const isOpen =
        toggle.getAttribute('aria-expanded') === 'true';

      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    const desktop = window.matchMedia('(min-width: 701px)');

    const resetForDesktop = (event) => {
      if (event.matches) closeMenu();
    };

    if (desktop.addEventListener) {
      desktop.addEventListener('change', resetForDesktop);
    } else if (desktop.addListener) {
      desktop.addListener(resetForDesktop);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, {
      once: true
    });
  } else {
    init();
  }
})();
