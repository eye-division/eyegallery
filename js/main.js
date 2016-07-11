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
      closeSpeed: 300,
      filter: "a",
      afterContent: function() {
          var caption = this.$currentTarget.find('img').attr('alt');
          /*this.$instance.find('.caption').remove();*/
          $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
      }
    });

  }); // end doc ready

})(jQuery); // End of use strict
