import React from 'react';

// Modal delegates formhandling to its parent
const Modal = ({ addTodo, setFormData, formData, setModalState }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
    console.log(formData);
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
    <div id="modalWindow">
      <header id="newTodoHeader">
        <h5>New Todo</h5>
        <span id="closeBtn" onClick={() => setModalState(false)}>
          &#10006;
        </span>
      </header>
      <div id="modalContent">
        <form id="newTodo" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="todoTitle"
            autoComplete="off"
            maxLength="20"
            onChange={updateValue}
            value={formData.title}
          />
          <label htmlFor="description" id="descriptionLabel">
            Description <p id="count"> (30 Characters left)</p>
          </label>
          <input
            type="text"
            name="description"
            id="todoDescription"
            maxLength="30"
            autoComplete="off"
            onChange={updateValue}
            value={formData.description}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="todoAuthor"
            autoComplete="off"
            maxLength="20"
            onChange={updateValue}
            value={formData.author}
          />
          <button
            type="submit"
            id="todoCreateBtn"
            onClick={() => setModalState(false)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
