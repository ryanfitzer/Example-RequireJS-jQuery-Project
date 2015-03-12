/*
 * Mediator: Home
 */
require( [ 'library/js/config/require-config.js' ], function() {

    require(
        [
            'jquery',
            'modules/logger',
            'modules/jquery.alpha',
            'modules/jquery.beta',
        ],

        function(
            $,
            logger,
            alpha,
            beta
        ) {

            var factoryArgs = arguments;

            var mediator = {

                init: function () {

                    logger( 'mediators/home', factoryArgs );

                    this.setVersions();
                    this.usePlugins();
                },

                setVersions: function () {

                    var output = []
                        , versionLog = $( '#versions-log' )
                        , template = versionLog[0].innerHTML
                        ;

                    var libs = {
                        'RequireJS': require.version,
                        'Almond': !require.version ? '0.3.1' : false,
                        'jQuery': $.fn.jquery
                    }

                    for ( var lib in libs ) {

                        if ( !libs[ lib ] ) continue;

                        output.push( template.replace( '{lib}', lib ).replace( '{version}', libs[ lib ] ) );
                    }

                    versionLog.html( output.join( ' and ' ) );
                },

                usePlugins: function () {

                    // Do something with the plugins that were loaded
                    $( 'h1' ).alpha( { message: 'I\'m on a boat!' } );
                    $( 'h2' ).beta( { message: 'Nooice.' } );
                }
            }

            mediator.init();
        }
    );
});