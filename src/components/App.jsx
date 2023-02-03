import './App.css';
import React, { useState } from "react";
import AddArea from "./AddArea";
import TodoItems from "./ToDoItems";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      isDone: true,
      item: "Do Homework"
    },
    {
      id: 2,
      isDone: false,
      item: "Eat Dinner"
    },
    {
      id: 3,
      isDone: false,
      item: "Brush"
    },
    {
      id: 4,
      isDone: true,
      item: "Go to bed"
    }
  ]);

  function handleAdd(newTodo) {
    if(!newTodo) return;

    const newId = todoList[todoList.length - 1].id + 1;
    setTodoList((prevValue) => {
      return [...prevValue, {id: newId, isDone: false, item: newTodo}];
    });
  }

  function handleDelete(deleteItemId) {
    setTodoList((prevValue) => {
      return prevValue.filter((item) => {
        return item.id !== deleteItemId;
      });
    });
  }

  function handleIsDone(id) {
    console.log("called");
    const list = todoList.map((item) => item.id === id ? {...item, isDone: !item.isDone} : item );
    setTodoList(list);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddArea onAdd={handleAdd} />
      <TodoItems
        toDoItems = {todoList}
        onChecked = {handleIsDone}
        onDelete = {handleDelete}
      ></TodoItems>
    </div>
  );
}

export default App;
