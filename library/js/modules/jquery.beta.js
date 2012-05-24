define(
    
    [
        'jquery',
        'modules/logger'
    ],
    
    function(
        
        $,
        logger
    
    ) {
    
    logger( 'wrappers/jquery.beta.js' );
    
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