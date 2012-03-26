/*
 * Optimization options
 */
({
    appDir: '../../',
    
    baseUrl: 'library/js/',
    
    dir: '../../../requirejs-jquery-build',
    
    optimize: 'none', // Don't minify so the script order of the built file can be easily inspected
    
    mainConfigFile: 'require-config.js', // Store the runtime configs in one place
    
    jQuery: null, // Override require-config value https://github.com/jrburke/requirejs/issues/212
    
    modules: [
    
        {
            
            name: 'boot-index',                    
            include: [ // Include the runtime config before the mediator
                'require-config',
                'mediators/index'
            ]
        }
    ]
})
