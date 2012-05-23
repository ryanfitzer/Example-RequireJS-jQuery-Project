define(
    
    [
        'jquery',
        'modules/logger'
    ],
    
    function(
        
        $,
        logger
    
    ) {
    
    logger( 'shims/jquery.alpha.js' );
    
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