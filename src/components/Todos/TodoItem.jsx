import React from 'react';

// TODO: Add completedTodo prop handler to update state on parent
// TODO: Add removeTodo prop handler to update state on parent

const TodoItem = ({ todos }) => {
  const handleComplete = () => {};

  const handleDelete = () => {};

  return (
    <>
      <li className="todoTitle">{todos.title}</li>
      <li className="todoDescription">{todos.description}</li>
      <li className="todoAuthor">{todos.author}</li>
      <li className="todoBtns">
        <button type="button" className="completeBtn" onClick={handleComplete}>
          Complete
        </button>
        <button type="button" className="deleteBtn" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
