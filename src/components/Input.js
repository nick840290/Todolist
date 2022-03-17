import React, { useState } from "react";
import { v4 } from "uuid";

function Input(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: v4(),
      do: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="請輸入代辦事項"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">送出</button>
    </form>
  );
}

export default Input;
