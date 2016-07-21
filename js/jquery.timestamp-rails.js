(function($) {

    $.fn.timestampRails = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            format         : 'dd-mm-yy',
            separator      : null
        }, options);

        this.each( function() {
            var date = new Date($(this).text());
		        var formatted_date = date.getDate() + '-' + (date.getMonth() + 1) + '-' +  date.getFullYear();
            
            if (settings.format){
		          if ( settings.format == "mm-dd-yy" ) {
								formatted_date = (date.getMonth() + 1) + '-' + date.getDate() + '-' +  date.getFullYear();
		            }
							else if ( settings.format == "yy-mm-dd" ){
								formatted_date = date.getFullYear() + '-' + date.getDate() + '-' + (date.getMonth() + 1);
		            }
							else{
								formatted_date = date.getDate() + '-' + (date.getMonth() + 1) + '-' +  date.getFullYear();
							}
						}

						if ( settings.separator ) {
								formatted_date = formatted_date.replace(/(-)+/g, settings.separator);
						}            
            

		        // Finally replace the actual DOM with the value.
						$(this).text(formatted_date);
        });

    }

}(jQuery));
