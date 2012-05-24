require(
    
    {
        paths: {
            'jquery': 'modules/jquery'
        },
        
        map: {

            '*': {
                'jquery': 'wrappers/jquery-config'
            },
            
            'wrappers/jquery-config': {
                'jquery': 'jquery'
            }
        }
    },

    [   
        'module',
        'modules/logger',
        'jquery'
    ],

    function(
        
        module,
        logger,
        $
        
    ) {

        logger( 'home', arguments, module );
    }
);