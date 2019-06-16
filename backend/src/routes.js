const express = require('express');

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send(`Olá MundoBig!! Bem vindo ${req.query.name}`);
});

module.exports = routes;