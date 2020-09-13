const sqlite3 = require('sqlite3').verbose()
const db = require('../../../../database/bd')

const HomeDao = require('../../../../database/DAO/home/todosDao')

const homeDao = new HomeDao(db)


class HomeModels {
    
    constructor(){
        this._objectJSON = {"name": '', "todo":[]}
    }

    async formatJSON(userId){
        await homeDao.generateListOfTodo(userId)
                    .then((rows)=> rows.forEach((row)=>{
                        this._objectJSON.todo.push({"title": row.title, "description": row.description})
                    }))
                    .catch((err) => console.log(`Error in todo list generate : ${err}`));
        

        await homeDao.generateUserName(userId)
                    .then((name)=> {this._objectJSON.name = `${name.first_name} ${name.last_name}`})
                    .catch((err) => console.log(`Error in name generate : ${err}`));
                        
        return this._objectJSON; 
        
    }


        



}

module.exports = HomeModels;