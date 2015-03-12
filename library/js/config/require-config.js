/*
 * RequireJS runtime config
 *
 * See all options: http://requirejs.org/docs/api.html#config
 */
require.config({

    /*
     * This is the main path to which our modules are relative.
     * This path is relative to the location of this file.
     * Resetting this is required to override the default, which
     * is set by the `data-main` attribute on the requirejs script tag.
     */
    baseUrl: 'library/js',

    /*
     * Since the jQuery source defines its path as `jquery`, it would need to be
     * found at the root of your js directory (`baseUrl`). This may not
     * always be possible. The following option allows us to locate
     * jQuery at a more logical path.
     */
    paths: {
        'jquery': 'vendor/jquery'
    },

    /*
     * Map a module's ID to another ID. This allows a module to require
     * 'moduleA' and instead get 'moduleB'.
     */
    map: {

        /*
         * The following applies to all modules (`'*'`) and declares that
         * when the module ID `jquery` is required, it will be mapped to
         * the module ID `modules/noconflict`.
         */
        '*': {
            'jquery': 'modules/noconflict'
        },

        /*
         *  The following applies only to the module ID `modules/noconflict` and
         *  declares that when the module ID `jquery` is required, it will be
         *  mapped back to the module ID `jquery`. And since that path has
         *  been relocated via the `paths` option, this module will get the
         *  actual jQuery source file.
         *
         *  Why go through all this trouble? Take a look at the "jquery.js"
         *  file in the "modules" directory and you'll find a call to `$.noConflict( true );`.
         *  This strategy keeps our version of jQuery as a private instance.
         *
         *  If you are working in an environment with mulitple versions of
         *  jQuery on the page, you'll be able to trust which jQuery API you're using.
         */
        'modules/noconflict': {
            'jquery': 'jquery'
        }
    }
});