import React, { useState } from 'react';
import Button from './TodoButton';
import Modal from '../Modal';
import Title from '../Title';
import CompletedList from './CompletedList';
import TodoList from './TodoList';

const TodosContainer = () => {
  const [modalState, setModalState] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTodo = () => {
    setTodos((previous) => [{ id: todos.length, ...formData }, ...previous]);
    setModalState(false);
  };

  const removeTodo = (id) => {
    const completedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(completedTodo);
  };

  const completeTodo = (id) => {
    // TODO: Find todoItem
    // TODO: RemoveTodoItem from todos (update state)
    // TODO: Update completedlist with todoItem (update state)
  };

  // TODO: Add necessary props to TodoList to be able to handle removeTodo, completeTodo and render todos (props drilling)
  // TODO: Add necessary props to CompletedList to be able to render completed

  return (
    <article className="card">
      <section className="todoContainer">
        <p>
          {modalState && (
            <Modal
              setFormData={setFormData}
              formData={formData}
              addTodo={addTodo}
              setModalState={setModalState}
            />
          )}
        </p>
        <Button
          name="New todo"
          clickHandler={() => setModalState(!modalState)}
        />
        {todos.length < 1 ? (
          <p>Jippi! Ingen todos i dag</p>
        ) : (
          <>
            <Title title="Mine todos" />
            {todos && (
              <TodoList
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                todos={todos}
              />
            )}
          </>
        )}
        <p>{completed.length < 1 ? 'Ingen completed' : <CompletedList />}</p>
      </section>
    </article>
  );
};

export default TodosContainer;
