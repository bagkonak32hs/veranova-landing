document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".card, .timeline-item, .cta-box, .hero-content, .hero-visual");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = "all 0.7s ease";
    observer.observe(el);
  });
});