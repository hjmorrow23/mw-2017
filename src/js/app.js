var menuBtn = document.querySelector('.js-menu-btn');
var body   = document.querySelector('body');

menuBtn.addEventListener('click', function() {
  body.classList.toggle('nav-shown');
});

