// Fade-in animation for sections
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Hamburger menu toggle + auto-close on link click
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  menu.addEventListener("click", function () {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
});
