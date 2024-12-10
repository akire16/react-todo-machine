import React from 'react';
import './TodoCounter.css';
import goodImage from "../assets/good.png";
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  return (
    <div className="TodoCounter default-widget">
      <img src={goodImage} alt="" />
      <div className="todo-counter-content">
        <h1>
          Good job Emily!
        </h1>
        <span>
          You have completed <span className="number">{completedTodos}</span> of <span className="number">{totalTodos}</span> tasks.
        </span>
      </div>
    </div>

  )
}

export { TodoCounter };