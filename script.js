document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => {
    observer.observe(item);
  });
});