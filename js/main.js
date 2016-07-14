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

    $(function() {
      $('#menu__button').on('click touchstart', function(e) {
        e.preventDefault();
        $('#menu__container').toggleClass('is-active').removeClass('is-hovered');
      });

    });

  }); // end doc ready

})(jQuery); // End of use strict
