$(document).ready(function () {
  // Smooth scrolling for navigation links
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000 // Adjust the animation speed as desired
      );
    }
  });

  // Show or hide the back-to-top button based on the scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top-btn').fadeIn();
    } else {
      $('#back-to-top-btn').fadeOut();
    }
  });

  // Smooth scroll to the top when the button is clicked
  $('#back-to-top-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

});

