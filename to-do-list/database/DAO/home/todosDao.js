
class HomeDao {
    constructor(db){
        this._db = db;
    }

    generateUserName(userId){
        return new Promise((resolve, reject) => {
                this._db.all(`SELECT first_name, last_name FROM User Where user_id = ?`, [userId], (err, rows) => {
                if(err) {
                    reject(err);
                }
                resolve(rows)
            })
        })
    }

    generateListOfTodo(userId){
        return new Promise((resolve, reject)=>{
            this._db.all(`SELECT todo_id, title, description, Important.important important FROM Todo 
            INNER JOIN Important ON Important.important_id = Todo.important_id
            Where user_id = ?`, [userId], (err , rows)=>{
                if(err) {
                    reject(err);
                } 
                resolve(rows)
            })

        })
    }

    deleteTodo(todoId){
        return new Promise((resolve, reject) =>{
            this._db.run(`Delete FROM Todo WHERE todo_id = ?`, [todoId], function(err){
                if(err) reject(err)
                resolve(this)
            })
        })
    }

    addToto(body, id){
        return new Promise((resolve, reject) => {
            this._db.run("INSERT into `Todo` (user_id, title, description, `type`, important_id, status_id) Values (?, ?, ?, ?, ?, ?)" ,
                [id, body.title, body.description, body.type, body.important_id, body.status_id], err => {
                    if(err) reject(err)
                    resolve(`Todo add`)
                })
        })
    }

    changeToto(body, id){
        return new Promise((resolve, reject) => {
            this._db.run("Update `Todo` SET title = ?, description = ?, important_id = ? where todo_id = ?" ,
                [body.title, body.description, body.important_id, id], function(err){
                    if(err) reject(err)
                    resolve(`Todo changed`)
                })
        })
    }
}

module.exports = HomeDao;