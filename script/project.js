let expandedIndex = -1;
function handleCardClick(index) {
  const cards = document.querySelectorAll('.card');
  if (index === expandedIndex) {
    expandedIndex = -1;
  } else {
    expandedIndex = index;
  }

  cards.forEach((card, i) => {
    if (i === expandedIndex) {
      card.classList.add('expanded');
    } else {
      card.classList.remove('expanded');
    }
  });
}

// ScrollReveal animations
ScrollReveal({
  reset: false,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.title, .subtitle', { origin: 'top' });
ScrollReveal().reveal('.card', { interval: 200, origin: 'bottom' });
