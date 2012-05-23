require.config({
    
    jQuery: '1.7.1',
    
    paths: {
        'jquery': 'modules/jquery'
    },
    
    shim: {
     
        'jquery': {
            
            exports: function() {
                console.log('\njquery `exports` arguments:');
                console.dir(arguments);
            }
        }
    }
});