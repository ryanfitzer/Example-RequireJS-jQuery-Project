require( [ 'require-config' ], function() {
    
    require(

        [   
            'jquery',
            'modules/logger',
            'shims/jquery.alpha',
            'shims/jquery.beta'
        ],

        function(
            
            $,
            logger
            
        ) {

            logger( 'home.js' );
            
            console.log('\nhome factory arguments');
            console.dir(arguments);
            console.log('\n');

        }
    );
});