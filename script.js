document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Close nav on link click (mobile)
  if (nav) {
    nav.addEventListener('click', function (e) {
      var target = e.target;
      if (target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle && toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});


