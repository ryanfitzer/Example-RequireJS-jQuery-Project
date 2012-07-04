define( function() {
    
    var log = document.getElementById( 'log' );
    
    return function( id, args ) {
        
        log.innerHTML += '<li><b>' + id + '</b> factory has executed.</li>';
        console.log( '\n' + id );
        console.dir( args );
    };
});