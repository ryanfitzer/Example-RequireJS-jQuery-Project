define(
    
    [
        'jquery',
        'modules/logger'
    ],
    
    function(
        
        $,
        logger
    
    ) {
        logger( 'modules/adapters/jquery', arguments );
        return $.noConflict( true );
    }
);