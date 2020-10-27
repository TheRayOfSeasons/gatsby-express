import express from 'express';
import { GetTodos, GetTodo, AddTodo, DeleteTodo } from './controller';

const TodoRouter = express.Router();

TodoRouter.get('/', GetTodos);
TodoRouter.get('/todo', GetTodo);
TodoRouter.post('/add', AddTodo);
TodoRouter.delete('/delete', DeleteTodo);

export { TodoRouter };
