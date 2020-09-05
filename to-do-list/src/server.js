const app = require('./config/custom-express')

const insertHTML = require('./app/routes/route')

const port = 3000

insertHTML(app);

app.listen(port, () => console.log(' Server ON'));

