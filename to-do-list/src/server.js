const app = require('./config/custom-express')
const routes = require('./app/routes/route')

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => console.log(' Server ON'));

