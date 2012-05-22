require.config({
    
    paths: {
        'jquery': 'modules/jquery'
    },
    
    shim: {
     'jquery': [ 'config-jquery' ],
     'modules/jquery.alpha': [ 'jquery' ],
     'modules/jquery.beta': [ 'jquery' ]
    }
});