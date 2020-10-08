import React from 'react';

const TodoItem = ({ todos, removeTodo, completeTodo }) => (
  <>
    <article className="card" key={todos.id}>
      <header>
        <h2>{todos.title}</h2>
        <p>{todos.author}</p>
        <p>{todos.description}</p>
      </header>
      <section>
        <button
          id="complete"
          type="button"
          onClick={() => completeTodo(todos.id)}
        >
          Complete
        </button>
        <button id="remove" type="button" onClick={() => removeTodo(todos.id)}>
          Remove
        </button>
      </section>
    </article>
  </>
);

export default TodoItem;
