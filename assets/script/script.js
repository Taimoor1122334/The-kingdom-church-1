  function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIconPath = document.getElementById("menuIconPath");

    // Toggle visibility
    mobileMenu.classList.toggle("hidden");

    // Toggle icon between hamburger and X
    const isMenuOpen = !mobileMenu.classList.contains("hidden");
    if (isMenuOpen) {
      menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12"); // Cross icon
    } else {
      menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16"); // Hamburger
    }
  }

  // Close mobile menu on link click
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById("mobileMenu").classList.add("hidden");

        // Reset icon to hamburger
        const menuIconPath = document.getElementById("menuIconPath");
        menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      });
    });
  });