/*
    Example of wrapping a jQuery plugin in AMD.
    As an AMD module, the plugin is not supposed 
    to return a value. Since it's a jQuery plugin,
    it's added to jQuery's namespace.
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
    
    logger( 'modules/beta', arguments );
    
    $.Beta = function( element, options ) {

        var defaults = {};

        this.options = $.extend( {}, defaults, options || {} );
        this.element = $( element );

        this.init();
    }

    $.Beta.prototype = {

        init: function() {

            var self = this;

            // do something...
        }
    }

    $.fn.beta = function( options ) {

        return this.each( function() {

            new $.beta( this, options );
        });
    }
});