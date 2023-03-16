import fetch from 'node-fetch';


function geraUsuarios(params) {
    const response = await fetch(`https://randomuser.me/api/?results=${params}`)
    for (let i = 0; i < response.results.length; i++){
        const name = response.results[i].name
        console.log(name.first, name.last)
    }
}