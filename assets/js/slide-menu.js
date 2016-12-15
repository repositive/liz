var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

// Toggle button
document.querySelector('.nav__mobile-toggle-button').addEventListener('click', function() {
  slideout.toggle();
});
