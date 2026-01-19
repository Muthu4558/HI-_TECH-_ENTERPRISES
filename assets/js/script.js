// Menu bar toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

let lastScrollY = window.scrollY;

/* Mobile menu toggle */
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-open");
    mobileMenu.classList.toggle("hidden");
});

/* Navbar show / hide on scroll */
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Scroll DOWN → show navbar
    if (currentScrollY > lastScrollY) {
        navbar.classList.add("-translate-y-full");

    }
    // Scroll UP → hide navbar
    else {
        navbar.classList.remove("-translate-y-full");

    }

    lastScrollY = currentScrollY;
});