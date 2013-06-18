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
    
	logger( 'modules/alpha', arguments );
    
    $.Alpha = function( element, options ) {

        var defaults = {};

        this.options = $.extend( {}, defaults, options || {} );
        this.element = $( element );

        this.init();
    }

    $.Alpha.prototype = {

        init: function() {

            var self = this;

            // do something...
        }
    }

    $.fn.alpha = function( options ) {

        return this.each( function() {

            new $.Alpha( this, options );
        });
	} 
});