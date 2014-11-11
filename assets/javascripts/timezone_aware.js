/**
 * @author Geoff
 */

(function($){
  
  $.fn.timezoneAware = function() {
    return this.each(function() {
      var self = $(this);
      
      if ( ! $.cookie('time_zone') ) {
        var timezone = jstz.determine();
      
        if (timezone)
          $.cookie( 'time_zone', timezone.name(), { expires: 7, path: '/' } );
      }
    });
  };

  $(document).ready(function() {
    $('*[data-timezone-aware]').timezoneAware();
  });
  
  
})(jQuery);
