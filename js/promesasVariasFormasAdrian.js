// gentileza de Adrian

const url = "https://swapi.dev/api/people/1/";

//opcion1
fetch(url)
.then(response => response.json())
.then(res => console.log(res))
.catch(e => console.error(e))

//opcion2
const call = async() => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}
call()

//opcion3
const request = require("request")
function fetchApi(){
    const promesa = new Promise(function(myResolve, myReject){
        request(url, {json:true}, (error, res, body) => {
            if (res.statusCode === 200) {
                myResolve(body)
            }
    })})
    promesa.then(pro => console.log(pro))
}
fetchApi();

//opcion4

//npm node-js
//npm install require
//npm install sync-request
//npm install axios
//npm install await-to-js


const axios = require("axios")
const fetchAxios = async() => {
    const response = await axios.get(url)
    console.log(response)
}
fetchAxios();