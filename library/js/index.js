require( [ 'config-require' ], function() {
    
    require(

        [
            'jquery',
            'modules/jquery.alpha',
            'modules/jquery.beta'
        ],

        function( $ ) {

            var log = document.getElementById('log'),
                msg = log.innerHTML += '<li><b>mediators/index.js</b> factory has been executed</li>';

        }
    );
});