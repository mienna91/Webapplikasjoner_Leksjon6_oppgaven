import React, { useState } from 'react';
import Button from './TodoButton';
import Modal from '../Modal';
import Title from '../Title';
import CompletedList from './CompletedList';
import TodoList from './TodoList';

const TodosContainer = () => {
  /* HOOKS */
  const dummyTodos = [
    {
      id: 0,
      title: 'Lære om react props/hooks/states',
      description:
        'Forsøke å wrappe hode rundt parent-childe og sibling-sibling forhold',
      author: 'Kristoffer',
    },
    {
      id: 1,
      title: 'Lage kvelds',
      description: 'Mean cheese sandwich',
      author: 'Kristoffer',
    },
    {
      id: 2,
      title: 'Binde fluer',
      description: 'rekeimitasjoner og lopper står på agendaen',
      author: 'Kristoffer',
    },
  ];
  const [modalState, setModalState] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [todos, setTodos] = useState(dummyTodos);
  const [completed, setCompleted] = useState([]);

  /* Function that adds a new todo, to the list of todos. Pushes the new
  todo at the front of the array with an ID, while keeping the previous
  todos */
  const addTodo = () => {
    setTodos((prev) => [{ id: todos.length, ...formData }, ...prev]);

    setModalState(false);
  };

  /* Function that removes a todo, filters out the todos that don't
  correspond with the id passed to the function and sets the todos
  list */
  const removeTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  /* Function for completeing a todo, filters out the todo to be
  completed bases on the id passed to the function, removes the todo
  and sets the new state for the todolist and the completed list */
  const completeTodo = (id) => {
    const completedTodo = todos.filter((todo) => todo.id === id);
    removeTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompleted(completed.concat(completedTodo));
  };

  return (
    <div className="todosWrapper">
      {modalState && (
        <Modal
          setFormData={setFormData}
          formData={formData}
          addTodo={addTodo}
          setModalState={setModalState}
        />
      )}
      <Button name="New todo" clickHandler={() => setModalState(!modalState)} />
      {todos.length < 1 ? (
        <Title title="Jippi! Ingen todos i dag" />
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
      {completed.length < 1 ? (
        <Title title="Ingen completed todos" />
      ) : (
        <CompletedList completed={completed} />
      )}
    </div>
  );
};

export default TodosContainer;
