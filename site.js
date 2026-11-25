// Mobile menu toggle
document.querySelectorAll(".nav-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nav = button.closest(".site-nav");
    const open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", open);
  });
});
