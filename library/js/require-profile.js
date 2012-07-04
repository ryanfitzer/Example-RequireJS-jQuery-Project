/*
 * Build profile
 * From your terminal, cd into the directory of this file and execute the following command:
 * 
 *  r.js -o require-profile.js
 *
 */
({
    baseUrl: 'library/js/',
    
    appDir: '../../',
    
    dir: '../../../requirejs-jquery-build',
    
    optimize: 'none', // So you can see how the files are concatenated.
    
    mainConfigFile: 'require-config.js',
    
    fileExclusionRegExp: /^\.|node_modules/,
    
    findNestedDependencies: true,

    modules: [
        
        {
            name: 'home'
        }
    ]
})
