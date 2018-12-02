


  (function($) { // Begin jQuery
    $(function() { // DOM ready
      // Toggle open and close nav styles on click
      $('#navigation-toggle').click(function() {
        $('nav .navigation-items').slideToggle();
      });
      // Hamburger to X toggle
      document.querySelector('#navigation-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery
