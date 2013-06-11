define(
    
    [
        'jquery',
        'modules/logger'
    ],
    
    function(
        
        $,
        logger
    
    ) {
        logger( 'modules/jquery/noconflict', arguments );
        return $.noConflict( true );
    }
);