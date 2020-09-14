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
            this._db.all(`SELECT title, description, Important.important important FROM Todo 
            INNER JOIN Important ON Important.important_id = Todo.important_id
            Where user_id = ?`, [userId], (err , rows)=>{
                if(err) {
                    reject(err);
                } 
                resolve(rows)
            })

        })
    }
}

module.exports = HomeDao;