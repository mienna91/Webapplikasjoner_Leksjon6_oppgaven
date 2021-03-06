import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, removeTodo, completeTodo }) => (
  <ul id="todos">
    {todos &&
      todos.map((item) => (
        <TodoItem
          key={item.id}
          todos={item}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
  </ul>
);
export default Todos;
