const sqlite3 = require('sqlite3').verbose()
const db = require('../../../../database/bd')

const HomeDao = require('../../../../database/DAO/home/todosDao')

const homeDao = new HomeDao(db)

class HomeModels {

    async formatJSON(userId){
        this._objectJSON = {"name": '', "todo":[]}

        await this.insertTodoList(userId, this)

        await homeDao.generateUserName(userId)
                    .then((rows)=> rows.forEach((row)=>{
                        this._objectJSON.name = `${row.first_name} ${row.last_name}`}))
                    .catch((err) => console.log(`Error in name generate : ${err}`));
                    
        return this._objectJSON; 
        
    }

    insertTodoList(userId, thiss){
        homeDao.generateListOfTodo(userId)
                    .then((rows)=> rows.forEach((row)=>{
                        thiss._objectJSON.todo.push({"todo_id": row.todo_id, "title": row.title, "description": row.description, "important": row.important})
                    }))
                    .catch((err) => console.log(`Error in todo list generate : ${err}`));
    }
    
    deleteTodoInDB(todoId){
        return homeDao.deleteTodo(todoId)
    }

}

module.exports = HomeModels;