/* ====================================================================
   Latitude 44 — Claude Learn landing
   --------------------------------------------------------------------
   ~50 lines of vanilla JS:
     1) Auto-fade the hero entrance words on load (via .reveal class)
     2) IntersectionObserver fades sections as they scroll into view
     3) Sticky nav adds .is-scrolled background once you scroll past hero
     4) Footer year auto-updates
   ==================================================================== */
(function () {
  'use strict';

  /* 1) Hero entrance — trigger reveal on next frame so transitions fire */
  requestAnimationFrame(function () {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-in');
    });
  });

  /* 2) IntersectionObserver — reveal-on-scroll */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
      io.observe(el);
    });
  } else {
    /* Fallback: just reveal them all */
    document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
      el.classList.add('is-in');
    });
  }

  /* 3) Sticky nav background */
  var nav = document.querySelector('.top-nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 4) Footer year */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
