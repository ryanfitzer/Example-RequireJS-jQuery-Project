/*!
 * Runtime configuration
 */
require.config({
    
    jQuery: '1.7.1', // Make sure we only get our version of jQuery (3rd parties may load their own)
    
    paths: {
        'jquery': 'modules/jquery' // Reset jQuery's path to the module's directory
    },
    
    deps: [ 'jquery' ],
    
    callback: function( $ ) {
        
        // Remove the jQuery global
        $.noConflict( true );
        
        var log = document.getElementById('log'),
            msg = log.innerHTML += '<li><b>require-config.js</b> factory has been executed</li>';
            
        // Debug
        console.log('#require-config.js');
        console.log('-------------------');
        console.log(arguments);
        console.log('');
        
    }
    
});