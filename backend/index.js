const express = require('express');
const knex = require('knex');

const api = new express();

api.get('/', (request, response) =>
{
  response.send('Todo!');
});

api.listen(process.env.PORT || 5000, () => console.log('API Started!'));
