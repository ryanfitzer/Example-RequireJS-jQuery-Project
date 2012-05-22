/*
 * Build profile
 * From your terminal, cd into the directory of this file and execute the following command:
 * 
 * r.js -o require-profile.js
 *
 */
({
    appDir: '../../',
    
    baseUrl: 'library/js/',
    
    dir: '../../../requirejs-jquery-build',
    
    optimize: 'none',
    
    findNestedDependencies: true,
    
    mainConfigFile: 'config-require.js',
    
    modules: [
    
        {
            name: 'index'
        }
    ]
})
