let age = 25;           //variable, local scope? - 

const name = "John";    //constante tipo String

var isStudent = true;   //variable tipo boolean, global scope, support old broser - aparentemente no se usa mas

let salary = 1500.75;   //variable - tipo NUM

const fruits = ["apple", "banana", "orange"];   //array tipo String

let person = { name: "Alice", age: 30, isEmployed: true };      //objeto

//console.log(person);    //impriendo en consola

/* ------------------------------------------------------------------------------------ */

//suma de enteros dentro de un array con varios tipos de datos

let arraySuma = [10, "hello", 5, true, 8];
//console.log(arraySuma);

let sumando = arraySuma[0] + arraySuma[2] + arraySuma[4];
//console.log(sumando);

/* ------------------------------------------------------------------------------------ */


//ejercicio para ver si un numero es par o impar y además divisible por 5

/*

for (let x=1; x<=20; x++) {
    if ((x % 5 == 0)) {
        console.log(x + " es divisible por 5")
        if (x % 2 == 0) {
            console.log(" y ademas es par")
        } else {
            console.log(" y ademas es impar")
        }
    }
    else if (x % 2 == 0) {
            console.log(x + " es par(even)");   
    }
    else {
            console.log(x + " es impar(odd)");
    }
}

*/


/* ------------------------------------------------------------------------------------ */

/*
let cont;

for (let x=2; x<=100; x++){
    cont = 0;
    for (let y=2; y<x; y++){
        if (x%y == 0) {
            cont = cont + 1;
        }
    }
    if (cont == 0) {
        console.log(x + " " + "es primo")
    }    
}
*/


/* ------------------------------------------------------------------------------------ */

//fc celsiusFarenheit()
//tomma un array de de c y lo convierte a f
//usar el metodo .map
//imprimir

/*

let celsius = [0, 100, 33, 50, -78];
let farenheit;

function celsiusFarenheit(celsius){
    farenheit = celsius.map (temp => (
        temp * (9/5)+32
    ))
    return farenheit;
};

console.log(celsius);
console.log(celsiusFarenheit(celsius));

*/


/* ------------------------------------------------------------------------------------ */

/*
const url = "https://swapi.dev/";

//console.log("Hola1");

let promesa = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve( response => {}

            );
        }, 2000);
});

promesa.then(res =>{
    console.log("Hola3" + res);
});

*/

/* ------------------------------------------------------------------------------------ */


const url = "https://swapi.dev/api/people"

function fetchData(url){
    const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => { resolve(data); 
        })
        .catch(error => reject(error)); // Manejar errores y rechazar la promesa si ocurre un problema
    }, 2000);
  });
return promesa;
}
  
fetchData(url)
  .then(data => {
    console.log("Datos recibidos:", data);
  })
  .catch(error => {
    // Manejar errores
    console.error("Error al obtener los datos:", error);
  });





