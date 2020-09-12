
const HomeController = require('../controller/home/home')


module.exports = (app) => {

    app.get(`/:id`, HomeController.generateHome())

}

/* (req, resp) => {

    const userId = req.params.id
    
    resp.send(generateHome(userId))
} */