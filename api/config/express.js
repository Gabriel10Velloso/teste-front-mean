// teste
const express = require('express');
const app = express();
const cors = require("cors");
const consign = require('consign');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }));


consign({ cwd: 'src' })
    .then('controllers')
    .then('routes')
    .into(app);


module.exports = app;