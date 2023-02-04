import React from "react";

function TodoItem(props) {
  return (
    <div className="item-container">
        <div 
        // className={props.isDone ? "line-through" : null}
        id="checklist"
        >
          <input 
            type="checkbox" 
            name="" 
            id={props.id} 
            value={props.item}
            defaultChecked={props.isDone}
            onChange={() => {props.onChecked(props.id)}}
          />
          <label htmlFor={props.id}>{props.item}</label>
          {/* {props.item} */}
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
