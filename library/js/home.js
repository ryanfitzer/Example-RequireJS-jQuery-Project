require( [ 'require-config' ], function() {
    
    require(
        
        [   
            'jquery',
            'modules/logger',
            'modules/alpha',
            'modules/beta',
        ],

        function(
            $,
            logger
        ) {
            
            logger( 'home', arguments );
        }
    );
});