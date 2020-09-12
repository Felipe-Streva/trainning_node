const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/todo.db')


function todosInJSON(userID){

    let objectJSON = {"name": '', "todo":[]}

    db.serialize(()=>{
        
        db.get(`SELECT first_name name FROM User Where user_id = ?`,[userID], (err, rows) => {
            if (err) {
                throw err;
            }
            console.log(rows)
            objectJSON.name = rows
        })

        db.all(`SELECT title, description FROM Todo Where user_id = ?`, [userID], (err , rows)=>{
            if (err) {
                throw err;
            }
            console.log(rows)
            rows.forEach((row)=>{
                objectJSON.todo.push({"title": row.title, "description": row.description})
            })

        })
        
    })


    return objectJSON;
}

module.exports = todosInJSON;
