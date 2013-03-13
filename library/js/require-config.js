require.config({ 
      
    jQuery: '1.9.1',
    
    paths: {
        'jquery': 'modules/jquery'
    },
    
    map: {

        '*': {
            'jquery': 'modules/adapters/jquery'
        },
        
        'modules/adapters/jquery': {
            'jquery': 'jquery'
        }
    }
});