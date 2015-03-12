/*
 * RequireJS build profile
 *
 * See all options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 *
 * From the root project directory, execute the following command in your terminal:
 *
 *      node_modules/requirejs/bin/r.js -o library/js/config/require-profile.js
 */
({
    // The path that represents the project's root folder
    // This path is relative to this file (require-profile.js)
    appDir: '../../../',

    // This is the main path to which our modules are relative.
    // This path is relative to the `appDir` option.
    baseUrl: 'library/js/',

    // This is where the build will be created.
    // This path is relative to this file (require-profile.js)
    dir: '../../../../Example-RequireJS-jQuery-Project-build',

    // This is the runtime configuration options
    // This path is relative to this file (require-profile.js)
    mainConfigFile: 'require-config.js',

    // Set 'none' so you can see how the files are concatenated.
    optimize: 'none',

    // Used for filtering out matches from your build.
    fileExclusionRegExp: /^\.|node_modules/,

    // Finds require() dependencies inside a require() or define call.
    // This allows our bootstrap module (home.js) to have its dependencies
    // properly traced without having to list them in the module's
    // `include` array in the `modules` array below.
    findNestedDependencies: true,

    // Create an object for each bootstrap module to be optimized. Their immediate
    // and deep dependencies will be built into the bootstrap's file.
    // Paths are relative to `baseUrl`.
    modules: [

        {   // This is the bootstrap home.js module. It is the one the that is
            // defined in the require.js script tag's `data-main` attribute
            // and is dynamically loaded by require.js.
            name: 'mediators/home'
        },

        {   // This is the main almond.js module. It will also include the
            // bootstrap home.js module. Using this module in your page's script
            // tag means require.js is not needed: https://github.com/jrburke/almond
            name: 'vendor/almond',
            include: 'mediators/home'
        }
    ]
})
