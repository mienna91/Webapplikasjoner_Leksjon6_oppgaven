import React, { useState } from 'react';

// Modal delegates formhandling to its parent
const Modal = ({ addTodo, setFormData, formData, setModalState }) => {
  const [maxCharacter, setMaxCharacter] = useState(50);

  const charCount = (event) => setMaxCharacter(50 - event.target.value.length);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };
  // Function for handling more than one inputfield
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  return (
    <section id="modal">
      <section className="modal_inner_wrapper">
        <header id="newTodoHeader">
          <h3>New todo</h3>
          <button type="button" onClick={() => setModalState(false)}>
            X
          </button>
        </header>
        <form id="todo_form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            maxLength="20"
            onChange={updateValue}
            value={formData.title}
          />
          <label htmlFor="description" id="descriptionLabel">
            Description:
            {maxCharacter < 1
              ? ' Maximum 50 characters'
              : ` ${maxCharacter} Characters left`}
          </label>
          <input
            type="text"
            name="description"
            id="description"
            maxLength="50"
            autoComplete="off"
            onKeyDown={charCount}
            onChange={updateValue}
            value={formData.description}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            autoComplete="off"
            maxLength="20"
            onChange={updateValue}
            value={formData.author}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Modal;
