import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          props.onChecked(props.id);
        }}
        >
            <ion-icon name="trash-outline"></ion-icon>
        </div>
    </div>
  );
}

export default TodoItem;

    // <li 
    // //   className={done ? "line-through" : null}
    // >

    //   </li>
