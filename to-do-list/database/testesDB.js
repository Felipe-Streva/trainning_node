const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/todo.db')



//Insert USER
/* db.serialize(()=>{
    const statement = db.prepare("INSERT into `User` (first_name, last_name, email, `password`) Values (?, ?, ?, ?)");
    statement.run('Vitoria', 'Maques', 'vic@gmail.com', 'Jaspion')
    statement.finalize()
}) */

//insert Todo
/* db.serialize(()=>{
    const statement = db.prepare("INSERT into `Todo` (user_id, title, description, `type`, important_id, status_id) Values (?, ?, ?, ?, ?, ?)");
    statement.run(1, 'Estudar Node', 'Estudar SQLite o dia todo', 1, 1, 1)
    statement.finalize()
})   */

//INSERT status
/* db.serialize(()=>{
    const statement = db.prepare("INSERT into `Status` (status) Values (?)");
    statement.run('Doing')
    statement.finalize()
}) */

//Insert important
/* db.serialize(()=>{
    const statement = db.prepare("INSERT into `Important` (important) Values (?)");
    statement.run('Very Important')
    statement.finalize()
}) */


db.close();


/* const email = db.get("SELECT * FROM `User`",[], (err, rows) => {
    if (err) {
      throw err;
    }
    return rows.email
})*/