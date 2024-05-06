// Scrolling section //
let lastScrollTop = 0;
  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      document.getElementById("head").classList.add("scrolled-down");
      document.getElementById("head").classList.remove("scrolled-up");
    } else {
      document.getElementById("head").classList.add("scrolled-up");
      document.getElementById("head").classList.remove("scrolled-down");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, false);

// Check Box //
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const checkboxes = document.querySelectorAll('.terms input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let allChecked = true;
            checkboxes.forEach(function(cb) {
                if (!cb.checked) {
                    allChecked = false;
                }
            });

            submitButton.disabled = !allChecked;
        });
    });
});






//HOME SECTION //
document.addEventListener("DOMContentLoaded", function() {
  const homeSection = document.getElementById('homeSection');
  
  homeSection.addEventListener('click', function() {
      // Toggle the animation state on click
      if (this.style.animationPlayState === 'running') {
          this.style.animationPlayState = 'paused';
      } else {
          this.style.animationPlayState = 'running';
      }
  });
});




// ABOUT SECTION //
document.addEventListener("DOMContentLoaded", function() {
  const link = document.querySelector('.smooth-scroll');

  link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = e.target.getAttribute('href'); // Get the target ID
      const targetSection = document.querySelector(targetId); // Get the target element

      // Smooth scroll to the target element
      window.scrollTo({
          'behavior': 'smooth',
          'top': targetSection.offsetTop
      });

      // Reset and trigger the animation for each image
      const images = targetSection.querySelectorAll('#im,#im5,#im6');
      images.forEach(img => {
          img.style.animation = 'none'; // Reset the animation
          setTimeout(() => {
              img.style.animation = ''; // Clear the reset
              img.style.animation = 'slide 1s forwards'; // Re-apply the animation
          }, 10); // Delay must be very short to reset and reapply animation
      });
  });
});




