const todoListToHTML = require('../../views/home/creatCards');
const HomeModels = require('../../models/home/home')

const homeModels = new HomeModels()


class HomeController {
    
    static generateHome(){
        return ((req, resp) => homeModels.formatJSON(req.params.id)
            .then((userCard)=>{
                resp.send(todoListToHTML(userCard))
        }))
    }

    static deleteTodo(){
        return ((req, resp) => {
            homeModels.deleteTodoInDB(req.params.todoId)
                .then(msg => console.log(msg))
                .catch(err => console.log(err))

        })
    }
}


module.exports = HomeController;