

  // typed
  const typed = new Typed('.multiple-text', {
    strings: ['COEPIAN', 'Developer', 'Programmer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // scrol reavela
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
  });
  ScrollReveal().reveal('.image-container', { origin: 'right' });
  ScrollReveal().reveal('.content-container', { origin: 'left' });
  ScrollReveal().reveal('.mobile-buttons', { origin: 'bottom' });
  ScrollReveal().reveal('.trees-container', { origin: 'bottom' });

