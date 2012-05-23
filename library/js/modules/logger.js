define( function() {
    
    var log = document.getElementById( 'log' );
    
    return function( message ) {
        
        log.innerHTML += '<li><b>' + message + '</b> factory has been executed.</li>';
    };
});