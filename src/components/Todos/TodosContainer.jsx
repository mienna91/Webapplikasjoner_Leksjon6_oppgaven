import React, { useState } from 'react';
import Button from './TodoButton';
import Modal from '../Modal';
import Title from '../Title';
import CompletedList from './CompletedList';
import TodoList from './TodoList';

const TodosContainer = () => {
  const myList = [
    {
      id: 1,
      title: 'Gjøre Webapplikasjoner',
      description: 'Lære meg hva useEffect egentlig er.',
      author: 'Blendi',
    },
    { id: 2, title: 'Lage middag', description: 'Taco?!', author: 'Blendi' },
    { id: 3, title: 'Trene', description: 'Chest', author: 'Blendi' },
  ];

  const [modalState, setModalState] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [todos, setTodos] = useState(myList);
  const [completed, setCompleted] = useState([]);

  const addTodo = () => {
    console.log(formData);
    setTodos((prev) => [{ id: todos.length, ...formData }, ...prev]);

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
    </div>
  );
};

export default TodosContainer;
