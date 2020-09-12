class HomeDao {
    constructor(db){
        this._db = db;
    }

    generateUserName(userId){
        return new Promise((resolve, reject) => {
                this._db.get(`SELECT first_name, last_name FROM User Where user_id = ?`,[userId], (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows)
            })
        })
    }

    generateListOfTodo(userId){
        return new Promise((resolve, reject)=>{
            this._db.all(`SELECT title, description FROM Todo Where user_id = ?`, [userId], (err , rows)=>{
                if (err) {
                    reject(err);
                }
                resolve(rows)
            })

        })
    }
}

module.exports = HomeDao;