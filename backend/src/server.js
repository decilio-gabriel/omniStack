const express = require('express');
const mongoose = require('mongoose')

const routes = require ('./routes');

const app = express ();

mongoose.connect('mongodb+srv://decilioads:gabriel158@cluster0-aywz4.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET, POST , PUT, DELETE

//req.query  = Acessar query params (para filtros)
//req.params = Acessar route params (para edicao, delete)
//req.body = Acessar corpo da requisição ( para criacao e edicao)

app.use(express.json());
app.use(routes);

app.listen (3333);