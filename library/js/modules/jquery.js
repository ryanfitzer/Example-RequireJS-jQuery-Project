define(
    
    [
        'jquery',
        'modules/logger'
    ],
    
    function(
        
        $,
        logger
    
    ) {
        logger( 'modules/src/jquery', arguments );
        return $.noConflict( true );
    }
);