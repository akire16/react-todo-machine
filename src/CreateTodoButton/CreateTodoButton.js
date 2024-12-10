import "./CreateTodoButton.css"

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="add-button"
      onClick={
        () => { setOpenModal(state => !state); }
      }
    >Add task</button >
  );
}

export { CreateTodoButton };