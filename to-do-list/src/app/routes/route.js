
const HomeController = require('../controller/home/home')

const LoginController = require('../controller/login/login')



module.exports = (app) => {

    app.get(`/`, LoginController.generateLogin())

    app.post(`/login`, LoginController.redirectToUserPage())

    app.get(`/failLoggin`, (req, resp) => {
        resp.send(`<h1>Email or Password is incorrect</h1>
        <a href="/">Back to Login</a>`)
    })

    app.get(`/newUser` , LoginController.generateNewUser())

    app.post(`/insertNewUser`, LoginController.insertNewUser())

    app.get(`/:id`, HomeController.generateHome())

    app.delete('/todo/:todoId', HomeController.deleteTodo())

    app.post(`/:id`, HomeController.addTodo())

    app.put(`/:id/todo/:todoId`, HomeController.changeTodo())

}
