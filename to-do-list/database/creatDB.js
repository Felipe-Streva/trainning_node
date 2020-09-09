const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database/todo.db')

db.serialize(()=>{
    db.run("CREATE TABLE if not exists `Todo` (todo_id integer primary key autoincrement, user_id integer, title varchar(80), description varchar(255), `type` varchar(150), important_id integer, status_id integer )");
    db.run("CREATE TABLE if not exists `User` (user_id integer primary key autoincrement, first_name varchar(150), last_name varchar(200), email varchar(200), password varchar(50) )");
    db.run("CREATE TABLE if not exists `Status` (status_id integer primary key autoincrement, `status` varchar(55))");
    db.run("CREATE TABLE if not exists `Important` (important_id integer primary key autoincrement, `important` varchar(55))");
})

