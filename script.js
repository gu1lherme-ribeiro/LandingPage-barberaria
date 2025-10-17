import { animate, scroll } from "motion";

scroll(
  animate(
    ".scrol-progress",
    { transform: ["scaleX(0),scaleX(1)"] },
    { easing: "linear" }
  )
);

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");

    // Change icon based on menu state
    const icon = mobileMenuBtn.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(
    ".service-card, .about-content, .testimonial-card"
  );

  function checkScroll() {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Apply initial styles for animation
  revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  document.addEventListener('DOMContentLoaded', function() {
      // Entrada suave do Hero
      animate(".hero h2", { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 0.6, easing: "ease-out" });
      animate(".hero p", { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 0.6, delay: 0.2, easing: "ease-out" });
      animate(".hero .btn", { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 0.6, delay: 0.4, easing: "ease-out" });
  
      // Parallax leve no conteúdo do Hero durante o scroll
      scroll(
          animate(".hero-content", { transform: ["translateY(0px)", "translateY(-30px)"] }, { easing: "ease-out" })
      );
  
      // Reveal suave das seções ao entrar na tela (usando Motion)
      const revealElements = document.querySelectorAll('.service-card, .about-content, .testimonial-card');
  
      function checkScroll() {
          revealElements.forEach(element => {
              const elementTop = element.getBoundingClientRect().top;
              const windowHeight = window.innerHeight;
  
              // Só anima uma vez por elemento
              if (elementTop < windowHeight - 100 && !element.dataset.revealed) {
                  element.dataset.revealed = "true";
                  animate(
                      element,
                      { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] },
                      { duration: 0.6, easing: "ease-out" }
                  );
              }
          });
      }
  
      // Estado inicial para o efeito
      revealElements.forEach(element => {
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';
      });
  
      // Dispara a checagem
      checkScroll();
      window.addEventListener('scroll', checkScroll);
  });

  // Header scroll effect
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.padding = "10px 0";
      header.style.backgroundColor = "rgba(17, 17, 17, 0.95)";
    } else {
      header.style.padding = "15px 0";
      header.style.backgroundColor = "rgba(17, 17, 17, 0.9)";
    }
  });
});
