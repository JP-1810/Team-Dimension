document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  }, { threshold: 0.3 });

  sections.forEach((section) => {
    observer.observe(section);
  });
});

  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }

