/*
 * Module: jquery.beta
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

        logger( 'modules/jquery.beta', arguments );

        // The constructor for our plugin
        function Beta( element, options ) {

            var defaults = {
                message: 'Totally Beta!'
            };

            this.element = $( element );
            this.options = $.extend( {}, defaults, options || {} );

            console.log('\nBeta plugin:', this.element, this.options );
        }

        // Let jQuery know we exist!
        $.fn.beta = function( options ) {

            return this.each( function() {

                new Beta( this, options );
            });
        }
});