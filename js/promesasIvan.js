//gentileza de Iva

const url2 = "https://swapi.dev/api/people/0/"; //no existe
const url3 = "https://swapi.dev/api/people/1/";
const request = require('request');

function fetchDataSWAPI(url){
    let options = {json:true}
    //let data = "hola"

    const promesa = new Promise((resolve, reject) => {
        request(url, options, (error, res, body) => {
            if (res.statusCode === 200) {
                resolve(body)
            } else {
                reject("hay problemas")
            }
        })
    })

    return promesa
}

fetchDataSWAPI(url2).then((res) => {
    console.log(res)
}) .catch((error) => {
    console.log(error);
})

fetchDataSWAPI(url3).then((res) => {
    console.log(res)
}) .catch((error) => {
    console.log(error);
})





