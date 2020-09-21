
const HomeController = require('../controller/home/home')


module.exports = (app) => {

    app.get(`/:id`, HomeController.generateHome())

    app.delete('/todo/:todoId', HomeController.deleteTodo())

}
