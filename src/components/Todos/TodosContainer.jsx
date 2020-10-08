import React, { useState } from 'react';
import Button from './TodoButton';
import Modal from '../Modal';
import Title from '../Title';
import CompletedList from './CompletedList';
import TodoList from './TodoList';

const TodosContainer = () => {
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

  const addTodo = () => {
    setTodos((prev) => [{ id: todos.length, ...formData }, ...prev]);

    setModalState(false);
  };

  const removeTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const completeTodo = (id) => {
    const completedTodo = todos.filter((todo) => todo.id === id);
    console.log(completedTodo);
    removeTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    // setCompleted((prev) => [{ ...completedTodo }, ...prev]);
    setCompleted(completed.concat(completedTodo));
  };

  // TODO: Add necessary props to CompletedList to be able to render completed

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
