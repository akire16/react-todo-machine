import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css"
import searchImage from "../assets/search.png"

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
    <div className="todo-search">
      <input
        placeholder="Search for tasks"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value) ;
        }}
      />
      <button>
        <img src={searchImage} alt="" />
      </button>
    </div>
  );
}

export { TodoSearch };