import React from 'react';
import TodoItem from './TodoItem';

// TODO: Add necessary props to <Todo /> item to be able to handle removeTodo and completeTodo (prop drilling)

const Todos = ({ todos, removeTodo, completeTodo }) => (
  <ul id="todos">
    {console.log(todos)}
    {todos &&
      todos.map((item) => (
        <TodoItem
          key={item.id}
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
  </ul>
);
export default Todos;
