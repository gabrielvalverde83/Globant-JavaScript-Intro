const usuarios = [
    {id: 1, nombre: 'Marcos'},
    {id: 2, nombre: 'Lena'}
];

const telefonos = [
    {id: 1, telef: 123},
    {id: 2, telef: 456}
];

const edades = [
    {id: 1, edad: 10},
    {id: 2, edad: 20}
];

const obtenerUsuario = (id, callback, error) => {
    
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe');
            callback(id);
        } else {
            error('El usuario no existe');
        }
};


const obtenerTelefono = (id, callback, error) => {
    
        if(telefonos.find(telefono => telefono.id === id)){
            console.log('El telefono existe');
            callback(id);
        } else {
            error('El telefono no existe');
        }
};


const obtenerEdad = (id, callback, error) => {
    
        const edad = edades.find( edad => edad.id === id);
        if(edad){
            callback('El usuario tiene + ' + edad.edad + ' años');
        } else {
            error('No se encontro edad');
        }
};


//llamo al callback

obtenerUsuario(2, id => {
    //siguiente fc
    obtenerTelefono(id, respTelefono => {
        //seguir mi codigo
        obtenerEdad(respTelefono, resEdad => {
            console.log(respTelefono);    
        }, errorEdad => {
            console.log(errorEdad);
        });
    }, errorTelefono => {
        console.error(errorTelefono);
    });
}, error => {
    console.log(error);
});
    