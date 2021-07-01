const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { estrategiasAutenticacao } = require('./src/usuarios/estrategias-autenticacao');


app.use(  
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.json())

module.exports = app;
