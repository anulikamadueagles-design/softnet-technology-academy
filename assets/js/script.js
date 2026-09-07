// Softnet Technology Academy — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // One orchestrated hero reveal (not scattered per-section fades)
  var hero = document.querySelector('.hero');
  if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hero.classList.add('is-ready');
  }

  // Contact / admissions form: client-side handling only.
  // NOTE FOR THE SCHOOL: this demo submission does not send email on its own.
  // Connect it to Formspree, Getform, or a school mailbox — see README.md.
  var forms = document.querySelectorAll('form[data-academy-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var status = form.querySelector('.form-status');
      var action = form.getAttribute('action') || '';
      var isPlaceholder = action.indexOf('your-form-id') !== -1 || action === '';

      if (isPlaceholder) {
        e.preventDefault();
        if (status) {
          status.textContent = 'Thanks — this form is a working template. Connect it to Formspree or your email inbox to start receiving real enquiries (see README.md).';
          status.classList.remove('err');
          status.classList.add('show', 'ok');
        }
      }
      // If a real form action has been set, the form submits normally.
    });
  });
});
