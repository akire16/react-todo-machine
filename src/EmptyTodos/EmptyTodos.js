import React from "react";
import "./EmptyTodos.css"
import pencilImage from "../assets/pencil.png"

function EmptyTodos() {

  return (
    <div className="default-widget empty default-warning">
      <p>Create your first task</p>
      <img src={pencilImage} alt="" />
    </div>
  );
}

export { EmptyTodos };