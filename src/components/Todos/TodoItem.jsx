import React from 'react';

// TODO: Add completedTodo prop handler to update state on parent
// TODO: Add removeTodo prop handler to update state on parent

const TodoItem = ({ todos }) => {
  const handleComplete = () => {};

  const handleDelete = () => {};

  return (
    <>
      <article className="card" key={todos.id}>
        <header>
          <h2>{todos.title}</h2>
          <p>{todos.author}</p>
          <p>{todos.description}</p>
        </header>
        <section>
          <button id="complete" type="button" onClick={handleComplete}>
            Complete
          </button>
          <button id="remove" type="button" onClick={handleDelete}>
            Remove
          </button>
        </section>
      </article>
    </>
  );
};

export default TodoItem;
