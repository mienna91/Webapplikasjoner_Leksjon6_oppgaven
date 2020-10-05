import React from 'react';
import CompletedItem from './CompletedItem';

const CompletedList = ({ todos, completeTodo }) => (
  <ul className="todoList">
    {todos.map((item) => (
      <CompletedItem key={item.id} />
    ))}
  </ul>
);

export default CompletedList;
