// ScrollReveal Animations
ScrollReveal().reveal(".reveal-logo", {
  duration: 800,
  origin: "top",
  distance: "40px",
  easing: "ease-in-out",
  delay: 100,
});

ScrollReveal().reveal(".reveal-heading", {
  duration: 900,
  origin: "bottom",
  distance: "40px",
  delay: 300,
});

ScrollReveal().reveal(".reveal-form", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
  delay: 500,
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const response = await fetch("https://formspree.io/f/mqapdwdd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else if (response.ok) {
    window.location.href = "thank-you.html"; 
  } else {
    alert("Failed to send message. Please try again.");
  }
});
