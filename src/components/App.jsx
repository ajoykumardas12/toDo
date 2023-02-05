import './App.css';
import React, { useState } from "react";
import AddArea from "./AddArea";
import ToDoItems from "./ToDoItems";
import EmptyList from "./EmptyList";

function App() {
  const items = JSON.parse(localStorage.getItem('todoItems'));
  const [todoList, setTodoList] = useState(items);

  function setItemsAndSetLocalStorage(newList){
    setTodoList(newList);
    localStorage.setItem('todoItems', JSON.stringify(newList));
  }

  function handleAdd(newTodo) {
    if(!newTodo) return;

    const newId = (todoList && todoList.length) ? todoList[todoList.length - 1].id + 1 : 1;
    const newToDoList = todoList ? [...todoList, {id: newId, isDone: false, item: newTodo}] : [{id: newId, isDone: false, item: newTodo}];

    setItemsAndSetLocalStorage(newToDoList);
  }

  function handleDelete(deleteItemId) {
    const newToDoList = todoList.filter((item) => item.id !== deleteItemId)
    setItemsAndSetLocalStorage(newToDoList);
  }

  function handleIsDone(id) {
    const newToDoList = todoList.map((item) => item.id === id ? {...item, isDone: !item.isDone} : item );
    setItemsAndSetLocalStorage(newToDoList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddArea onAdd={handleAdd} />
      {(todoList && todoList.length) ?       
      <ToDoItems
        toDoItems = {todoList}
        onChecked = {handleIsDone}
        onDelete = {handleDelete}
      ></ToDoItems> : 
      <EmptyList/>}

    </div>
  );
}

export default App;
