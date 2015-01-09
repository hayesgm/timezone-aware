//= require jstz
//= require docCookies

/**
 * @author Geoffrey Hayes
 */

(function(jstz, docCookies){
  
  var timezoneAware = function() {
    if ( ! docCookies.getItem('time_zone') ) {
      var timezone = jstz.determine();
      
      if (timezone) {
        docCookies.setItem('time_zone', timezone.name(), 60*60*24*7, '/');
      }
    }
  };

  // Run automatically
  timezoneAware();

})(jstz, docCookies);
