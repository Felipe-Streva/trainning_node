const createHome = require('../views/home/home')

module.exports = (app) => {

    app.get('/', (req, resp) => {

        resp.send(createHome)
    })

}