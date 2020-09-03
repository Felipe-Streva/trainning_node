const todos = require('../../models/home/home');

function todoListToHTML(todos){
    let list = ''

    for(let i = 0; i<todos.length ; i++){
        list += 
        `<div>
            <h1>${todos[i].title}</h1>
            <p>${todos[i].todo}</p>
        </div>
        `
    }
    return list
}

module.exports = todoListToHTML(todos)