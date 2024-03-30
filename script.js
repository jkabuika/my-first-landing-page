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

// Got the navigation bar & the offset position of the navbar
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

// Added the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Listen for the scroll event
window.addEventListener("scroll", stickyNavbar);
