const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://randomuser.me/api/?results=500')
.then(resp=>resp.json())
.then(data => add500Users(data))
.catch((err)=> {
    throw new Error(err)
})

function add500Users(data){
    for(let i = 0; i<data.results.length;i++){

        fs.createWriteStream("./dados/usuario.csv",{flags: 'a'})
        .write(`${data.results[i].name.first}, ${data.results[i].name.last}, ${data.results[i].email}, ${data.results[i].dob.age}, ${data.results[i].gender}, ${data.results[i].login.username}, ${data.results[i].login.password}\n`)
       
    }
}

