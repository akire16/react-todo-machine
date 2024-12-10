import "./TodoItem.css"
import iconClose from "../assets/close.png"
import iconCheck from "../assets/check.png"

function TodoItem(props) {
  return (
    <li className={`todo-item default-widget ${props.completed && "todo-item-completed"}`}>
      <p className={`todo-item-p ${props.completed && "todo-item-p-completed"}`}>{props.text}</p>
      <span>
        <span
          className={`icon icon-check ${props.completed && "icon-check-completed"}`}
          onClick={props.onComplete}
        >
          <img src={iconCheck} alt="" />
        </span>
        <span
          className="icon icon-delete"
          onClick={props.onDelete}
        >
          <img src={iconClose} alt=""/>
        </span>
      </span>
    </li>
  );
}

export { TodoItem };