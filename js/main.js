(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Syntax highlighting
    hljs.initHighlightingOnLoad();

    // Header
    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-navigation-menu').slideToggle(function(){
        if($('#js-navigation-menu').is(':hidden')) {
          $('#js-navigation-menu').removeAttr('style');
        }
      });
    });

    // featherlight gallery options
    $('.galleryphoto').featherlightGallery({
      gallery: {
        fadeIn: 300,
        fadeOut: 300
      },
      openSpeed: 300,
      closeSpeed: 300
    });

  });

})(jQuery); // End of use strict
