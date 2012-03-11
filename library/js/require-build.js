({
    appDir: '../../',
    baseUrl: 'library/js/',
    dir: '../../../requirejs-jquery-build',
    optimize: 'none',
    mainConfigFile: 'require-config.js',
    jQuery: null, //override require-config value https://github.com/jrburke/requirejs/issues/212
    modules: [
        {
            name: 'boot-index',
            include: [
                'require-config',
                'mediators/index'
            ]
        }
    ]
})
