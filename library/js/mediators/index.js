define(
    
    [
        'jquery',
        'modules/jquery.alpha',
        'modules/jquery.beta'
    ],
    
    function( $ ) {
        
        var log = document.getElementById('log'),
            msg = log.innerHTML += '<li><b>mediators/index.js</b> factory has been executed</li>';
        
        $('body').alpha();
        $('body').beta();
        
        // Debug    
        console.log('#mediators/index.js');
        console.log('-------------------');
        console.log(arguments);
        console.log('');

    }
);