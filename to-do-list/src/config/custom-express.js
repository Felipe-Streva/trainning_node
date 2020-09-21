const express = require('express');
const app = express();

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use('/static', express.static('public'));

module.exports = app;