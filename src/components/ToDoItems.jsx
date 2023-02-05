import React from "react";
import ToDoItem from './ToDoItem';

function ToDoItems(props) {
  return (
    <div className="items-container">
      {props.toDoItems.map((item) => ( 
        <ToDoItem 
          key = {item.id}
          id = {item.id}
          item = {item.item}
          isDone = {item.isDone}
          onChecked = {props.onChecked}
          onDelete = {props.onDelete}
        >
        </ToDoItem>
      ))
      }
      
    </div>
  );
}

export default ToDoItems;
