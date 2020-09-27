class LoginDao{
    constructor(db){
        this._db = db;
    }

    findRowPerEmail(email){
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT email, password, user_id FROM User WHERE email = ?`, [email], (err, rows) => {
                if(err) {
                    reject(err);
                }
                resolve(rows)
            })
        })
    }

    async addUser(body){

        const num = await new Promise((resolve, reject) => {
            this._db.all("Select * From User Where email = ?" ,
                [body.email], (err, rows) => {
                    if(err) reject(err)
                    resolve(rows)
                })
        })

        console.log(num)

        if(num.length == 0){
            return new Promise((resolve, reject) => {
                this._db.run("INSERT into `User` (first_name, last_name, email, `password`) Values (?, ?, ?, ?)" ,
                    [body.first_name, body.last_name, body.email, body.password], err => {
                        if(err) reject(err)
                        resolve(`User add`)
                    })
            })
        } else {
            return new Promise((resolve, reject) => {
                reject('Email já existente')
            })
        }
    }
}

module.exports = LoginDao