  function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIconPath = document.getElementById("menuIconPath");

    mobileMenu.classList.toggle("hidden");

    const isMenuOpen = !mobileMenu.classList.contains("hidden");
    if (isMenuOpen) {
      menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12"); 
    } else {
      menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16"); 
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById("mobileMenu").classList.add("hidden");

        const menuIconPath = document.getElementById("menuIconPath");
        menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      });
    });
  });




   const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

      window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const triggerPoint = window.innerHeight * 0.5; 

    if (window.scrollY > triggerPoint) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });