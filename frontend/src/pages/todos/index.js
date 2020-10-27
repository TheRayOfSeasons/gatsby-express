import React from 'react';
import { Link } from 'gatsby';

const TodosIndex = () => (
  <>
    <div>
      <h1>Todos Index</h1>
      <div>
        <Link to="/">Go back to home</Link>
      </div>
      <div>
        <Link to="/todos/page-2/">Go to page 2 of todos</Link>
      </div>
    </div>
  </>
);

export default TodosIndex;
