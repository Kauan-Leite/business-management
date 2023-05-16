// src/app.js
const express = require('express');

const empresa = require('./controllers/empresa.controller');

const app = express();

app.use(express.json());

app.get('/empresas', empresa.getAll);

module.exports = app;
