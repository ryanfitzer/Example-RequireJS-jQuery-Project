/*
 * Module: jquery.alpha
 *
 * This is an example of wrapping a jQuery plugin in AMD.
 * As an AMD module, the plugin does not return a value.
 * Since it's a jQuery plugin, it's added to jQuery's namespace.
 */
define(

    [
        'jquery',
        'modules/logger'
    ],

    function(

        $,
        logger

    ) {

    	logger( 'modules/jquery.alpha', arguments );

        // The constructor for our plugin
        function Alpha( element, options ) {

            var defaults = {
                message: 'Totally Alpha!'
            };

            this.element = $( element );
            this.options = $.extend( {}, defaults, options || {} );

            console.log('\nAlpha plugin:', this.element, this.options );
        }

        // Let jQuery know we exist!
        $.fn.alpha = function( options ) {

            return this.each( function() {

                new Alpha( this, options );
            });
    	}
});