import React, { useState } from "react";

function AddArea(props) {
  const [newTodo, setNewTodo] = useState("");

  function handleInput(event) {
    const input = event.target.value;
    setNewTodo(input);
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        props.onAdd(newTodo);
        setNewTodo("");
      }}
    >
      <input
        type="text"
        name="newTodo"
        onChange={handleInput}
        value={newTodo}
        autoComplete="off"
        autoFocus
      />
      <button type={"submit"}>
        <span>Add</span>
      </button>
    </form>
  );
}

export default AddArea;