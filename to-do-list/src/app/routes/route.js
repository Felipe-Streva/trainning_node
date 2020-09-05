
const generateHome = require('../controller/home/home')


module.exports = (app) => {

    app.get(`/:id`, (req, resp) => {

        const userId = req.params.id
        
        resp.send(generateHome(userId))
    })

}