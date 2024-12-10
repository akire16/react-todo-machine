import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new task</label>
      <textarea
        placeholder="Buy christmas gifts..."
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="todo-form-buttons">
        <button
          className="button button-cancel"
          type="button"
          onClick={onCancel}
        >Cancel
        </button>
        <button
          className="button button-success"
          type="submit"
        >Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm };