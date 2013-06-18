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
            logger,
            alpha, // Returns undefined
            beta // Returns undefined
        ) {
            
            logger( 'home', arguments );
        }
    );
});