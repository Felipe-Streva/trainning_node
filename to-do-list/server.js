const app = require('./src/config/custom-express')

const insertHTML = require('./src/app/routes/route')

const port = 3000

insertHTML(app);

app.listen(port, () => console.log(' Server ON'));

