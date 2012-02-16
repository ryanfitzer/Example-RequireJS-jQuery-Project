({
    appDir: '../../',
    baseUrl: 'library/js/',
    dir: '../../../requirejs-jquery-build',
    paths: {
        jquery: 'modules/jquery'
    },
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
