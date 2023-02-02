import './App.css';
import React, { useState } from "react";
import AddArea from "./AddArea";
import TodoItems from "./ToDoItems";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      checked: true,
      item: "Do Homework"
    },
    {
      id: 2,
      checked: false,
      item: "Eat Dinner"
    },
    {
      id: 3,
      checked: false,
      item: "Brush"
    },
    {
      id: 4,
      checked: true,
      item: "Go to bed"
    }
  ]);

  function handleAdd(newTodo) {
    if(!newTodo) return;

    const newId = todoList[todoList.length - 1].id + 1;
    setTodoList((prevValue) => {
      return [...prevValue, {id: newId, checked: false, item: newTodo}];
    });
  }

  function handleDelete(id) {
    setTodoList((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }


  function handleChecked(event) {
    // setDone((prevValue) => {
      // return !prevValue;
    // });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddArea onAdd={handleAdd} />
      <TodoItems
        toDoItems = {todoList}
        onChecked = {handleChecked}
        onDelete = {handleDelete}
      ></TodoItems>
    </div>
  );
}

export default App;
