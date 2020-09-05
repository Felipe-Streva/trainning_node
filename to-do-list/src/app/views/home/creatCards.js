const creatHome = require('./home')

function todoListToHTML(userCards){
    let list = ''

    const name = `<h1 class="text-center m-5">${userCards.name}</h1>
    `

    for(let i = 0; i<userCards.todo.length ; i++){
        list += 
        `<div class="card mt-1" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${userCards.todo[i].title}</h5>
          <p class="card-text">${userCards.todo[i].description}</p>
        </div>
      </div>
        `
    }
    return creatHome(name, list)
}

module.exports = todoListToHTML