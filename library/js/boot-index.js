/*
    Top-Level Bootstrap
*/
require(
    
    {
        priority: [ 'require-config' ]
    },
    
    [ 'mediators/index' ],
    
    function() {
        
        var log = document.getElementById('log'),
	        msg = log.innerHTML += '<li><b>boot-index.js</b> factory has been executed</li>';
	    
	    // Debug    
        console.log('#boot-index.js');
        console.log('-------------------');
        console.log(arguments);
        console.log('');
    }
);