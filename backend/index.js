import express from 'express';
import knex from 'knex';
import { TodoRouter } from './controllers/todos/router';

const api = new express();

api.get('/', (request, response) =>
{
  response.send('Todo!');
});

api.use('/todos', TodoRouter);

api.listen(process.env.PORT || 5000, () => console.log('API Started!'));
