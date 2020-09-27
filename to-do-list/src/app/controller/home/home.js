const todoListToHTML = require('../../views/home/creatCards');
const HomeModels = require('../../models/home/home');

const homeModels = new HomeModels()

class HomeController {
    
    static generateHome(){
        return ((req, resp) => {
            homeModels.formatJSON(req.params.id)
            .then((userCard)=>{
                resp.send(todoListToHTML(userCard, req.params.id))
            })
        })
            
    }
    

    static deleteTodo(){
        return ((req, resp) => {
            homeModels.deleteTodoInDB(req.params.todoId)
                .then(informationRunDB => {
                    if(informationRunDB.changes!=0) console.log('Todo Deleted')
                    resp.json(informationRunDB)
                })
                .catch(err => console.log(err))

        })
    }

    static addTodo(){
        return ((req,resp) => {
            homeModels.addTodoInDB(req.body, req.params.id)
                .then(msg => {
                    console.log(msg)
                    resp.redirect(`/${req.params.id}`)
                })
                .catch(err => console.log(err))
        })
    }

    static changeTodo(){
        return ((req, resp) => {
            homeModels.changeTodoInDB(req.body, req.params.todoId)
                .then((msg) => {
                    console.log(msg)
                    resp.redirect(`/${req.params.id}`)
                })
                .catch(err => console.log(err))
        })
    }
}


module.exports = HomeController;