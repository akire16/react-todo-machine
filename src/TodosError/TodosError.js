import React from "react";
import "./TodosError.css"
import warningImage from "../assets/warning.png"

function TodosError() {

  return (
    <div className="default-widget error default-warning">
      <p>There was an error!</p>
      <img src={warningImage} alt="" />
    </div>
  );
}

export { TodosError };