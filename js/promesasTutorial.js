/*

let x = 1;

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        x = x * 3 + 2;
        console.log('dentro del time out');
        resolve(x);
    }, 2000);
});

console.log('Antes de la fc de llamado');

promesa.then(res => {
    console.log('ultimo paso, resultado=' + x)
});

*/


/* ************************************************************************************** */

/*

const usuarios = [
    {id: 1, nombre: 'Marcos'},
    {id: 2, nombre: 'Lena'}
];

const telefonos = [
    {id: 1, telef: 123},
    {id: 2, telef: 456}
];

const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if(usuarios.find(usuario => usuario.id === id)){
            resolve('El usuario existe');
        } else {
            reject('El usuario no existe');
        }
    });
};

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if(telefonos.find(telefono => telefono.id === id)){
            resolve('El telefono no existe');
        } else {
            reject('El telefono no existe');
        }
    });
};

//llamo a la fc

obtenerUsuario(2)
.then(res => {
        console.log(res);
})
.catch(error => {
        console.log(error);
})

*/

/* ************************************************************************************** */

/*

const usuarios = [
    {id: 1, nombre: 'Marcos'},
    {id: 2, nombre: 'Lena'}
];

const telefonos = [
    {id: 1, telef: 123},
    {id: 2, telef: 456}
];

const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe');
            resolve(obtenerTelefono(id));
        } else {
            reject('El usuario no existe');
        }
    });
};

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if(telefonos.find(telefono => telefono.id === id)){
            resolve('El telefono existe');
        } else {
            reject('El telefono no existe');
        }
    });
};

obtenerUsuario(2)
.then(res => {
        return res;     //para la primer promesa
})
.then(mensaje => {
        console.log(mensaje);   //para la segunda promesa
})
.catch(error => {
        console.log(error);
})

*/

/* ************************************************************************************** */

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

const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe');
            resolve(obtenerTelefono(id));
        } else {
            reject('El usuario no existe');
        }
    });
};

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if(telefonos.find(telefono => telefono.id === id)){
            console.log('El telefono existe');
            resolve(obtenerEdad(id));
        } else {
            reject('El telefono no existe');
        }
    });
};

const obtenerEdad = id => {
    return new Promise((resolve, reject) => {
        const edad = edades.find( edad => edad.id === id);
        if(edad){
            resolve('El usuario tiene + ' + edad.edad + ' años');
        } else {
            reject('no se encontro la edad');
        }
    });
};

//llamo a la fc

obtenerUsuario(2)
.then(resUsuario => {
        return resUsuario;     //para la primer promesa
})
.then(resTelef => {
        return resTelef;
})
.then(mensaje => {
        console.log(mensaje);   //para la segunda promesa
})
.catch(error => {
        console.log(error);
})