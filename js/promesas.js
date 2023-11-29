/* ------------------------------------------------------------------------------------ */
//const main = document.getElementById("main");


const url = "https://swapi.dev/api/people"

function fetchData(url){
    const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())  //guarda el body del response en un JSON, en results, sino es un quilombo
        .then(data => { resolve(data); })   //guarda la info en el objeto data
        .catch(error => reject(error)); // Manejar errores y rechazar la promesa si ocurre un problema
      }, 2000);     //fin TimeOut
    });     //fin promise
return promesa;
}

fetchData(url)
  .then(data => {
    console.log("Datos recibidos:", data);
    //main.innerHTML = data.results;
    //let namePrueba = data.map(nombre => nombre.results);
    //console.log(namePrueba);
  })
  .catch(error => {
    // Manejar errores
    console.error("Error al obtener los datos:", error);
  });

  /********************************************************************************/

// resolucion Ivan, hay que instalar request ---- desde la terminal : npm install request

//cont request = requiere('request');

