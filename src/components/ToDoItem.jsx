import React from "react";

function TodoItem(props) {
  return (
    <div className="item-container">
        <div className={props.isDone ? "line-through" : null}>
          <input 
            type="checkbox" 
            name="" 
            id="" 
            defaultChecked={props.isDone}
            onChange={() => {props.onChecked(props.id)}}
          />
          {props.item}
        </div>
        <div
          className="trash-icon"
          onClick={() => {
            props.onDelete(props.id);
          }}
          >
          <ion-icon name="trash-outline"></ion-icon>
        </div>
    </div>
  );
}

export default TodoItem;
