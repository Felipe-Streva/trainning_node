const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body && req.body.idTodo != 'null') {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}))

app.use('/static', express.static(__dirname + '../../../public'));

module.exports = app;