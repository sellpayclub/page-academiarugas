document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // FAQ Accordion functionality
  const faqButtons = document.querySelectorAll(".faq-toggle");
  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.parentElement;
      const answer = parent.querySelector(".faq-answer");
      const icon = button.querySelector(".faq-icon");
      const isOpen = !answer.classList.contains("hidden");

      // Close all other accordions
      document.querySelectorAll(".faq-answer").forEach(item => item.classList.add("hidden"));
      document.querySelectorAll(".faq-icon").forEach(item => item.classList.remove("rotate-180", "text-purple-600"));
      document.querySelectorAll(".faq-toggle-container").forEach(item => item.classList.remove("border-purple-200"));

      if (!isOpen) {
        answer.classList.remove("hidden");
        icon.classList.add("rotate-180", "text-purple-600");
        parent.classList.add("border-purple-200");
      }
    });
  });

  // Reveal elements on scroll (Framer Motion equivalent)
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));
});
