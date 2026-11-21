(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // contact form
  var form = document.getElementById('enroll-form');
  if (form) {
    var select = document.getElementById('course');
    var key = new URLSearchParams(window.location.search).get('course');
    if (key && select) {
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].getAttribute('data-key') === key) {
          select.selectedIndex = i;
          break;
        }
      }
    }
    var status = document.getElementById('form-status');
    var button = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = 'Sending...';
      button.disabled = true;
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            status.className = 'form-status ok';
            status.textContent = 'Thank you. We received your details and will message you on WhatsApp.';
          } else {
            throw new Error('failed');
          }
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'Your message was not sent. Check your connection and try again.';
        })
        .then(function () {
          button.disabled = false;
        });
    });
  }
})();
