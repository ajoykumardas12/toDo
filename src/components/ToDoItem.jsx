import React from "react";

function TodoItem(props) {
  return (
    <div className="item-container">
        <div className={props.checked ? "line-through" : null}>

            <input 
            type="checkbox" 
            name="" 
            id="" 
            checked={props.checked}
            onClick={props.onChecked}
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
