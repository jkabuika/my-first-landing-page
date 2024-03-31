// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      const offsetTop = target.offsetTop;

      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;

  function stickyNavbar() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
      } else {
          navbar.classList.remove("sticky");
      }
  }

  window.addEventListener("scroll", stickyNavbar);
});
