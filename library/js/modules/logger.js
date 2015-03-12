define( [], function() {

    var modulesLog = document.getElementById( 'modules-log' );

    function logger( id, args ) {

        var template = '<li><code>{id}</code> factory has executed!</li>';

        modulesLog.innerHTML += template.replace( '{id}', id );

        console.log( '\n' + id );
        console.log( 'Factory arguments:', args || [] );
    }

    return logger;
});