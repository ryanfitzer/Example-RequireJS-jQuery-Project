define(

    [
        'jquery',
        'modules/logger'
    ],

    function(

        $,
        logger

    ) {

        // Mimic jQuery's factory executing. Since it's a 3rd-party AMD module it does not use our "logger.js" module.
        logger( 'vendor/jquery' );

        logger( 'modules/noconflict', arguments );

        return $.noConflict( true );
    }
);