const creatHome = require('./home')

function todoListToHTML(userCards, userId){
    let list = ''

    const name = `<h1 class="text-center m-5">${userCards.name}</h1>
    `

    for(let i = 0; i<userCards.todo.length ; i++){
        list += 
        `<div class="card mt-1" data-id="${userCards.todo[i].todo_id}" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${userCards.todo[i].title}</h5>
              <p class="card-text">${userCards.todo[i].description}</p>
              <h6 class="card-title">${userCards.todo[i].important}</h6>
            </div>
            <div class="m-3 d-flex justify-content-end">
              <button type="button"  class="btn btn-secondary btn-sm mr-1" onClick="formatTodo(event)">Editar</button>
              <button type="button" class="btn btn-secondary btn-sm" onClick="deleteTodo(event)">Arquivar</button>
            </div>
        </div>
        `
    }
    return creatHome(name, list, userId)
}

module.exports = todoListToHTML