define(
    
    [ 'jquery' ], 
    
    function( $ ) {
        
        // Define the constructor
        $.Beta = function(element, options) {
    
            // Define the plugin's default options
            var defaults = {};
    
            // Create a new options object from instance's customizations
            this.options = $.extend({}, defaults, options || {});
    
            // Cache a jQuery version of the element
            this.element = $(element);
    
            // Run the init method
            this.init();
        };
    
        // Add methods to the constructor's prototype
        $.Beta.prototype = {
    
            init: function() {
    
                // Save the context of the new constructor instance
                var self = this;
    
                console.log('Beta loaded');
            }
        };
        
        // Add the plugin method to jQuery's prototype
        $.fn.beta = function(options) {
    
            // Call a new instance of the constructor on each element, passing in the element and options object
            return this.each(function() {
                new $.Beta(this, options);
            });
        }
        
        var log = document.getElementById('log'),
	        msg = log.innerHTML += '<li><b>modules/jquery.beta.js</b> factory has been executed</li>';
	        
        console.log('#modules/beta.js');
        console.log('-------------------');
        console.log(arguments);
        console.log('');
    
    }
);