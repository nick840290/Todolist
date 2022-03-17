import React, { useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Input from "./Input";
import Todo from "./Todo";
import TodoOver from "./TodoOver";
import Do from "./Do";

function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newtodo = [todo, ...todos];

    setTodos(newtodo);

    // console.log(newtodo);
  };

  const removeTodo = (id) => {
    const deletetodo = [...todos].filter((todo) => todo.id !== id);

    setTodos(deletetodo);
  };

  return (
    <div>
      <h1>待辦事項</h1>
      <Input onSubmit={addTodo} />
      <NavLink to="do" className="c-tabs__btn c-tabs__btn--w100">
        可領取
      </NavLink>
      <NavLink to="TodoOver" className="c-tabs__btn c-tabs__btn--w100">
        可使用
      </NavLink>{" "}
      <Todo todos={todos} removeTodo={removeTodo} />
      <Routes>
        <Route path="do" element={<Do />} />
        <Route path="TodoOver" element={<TodoOver />} />
        <Route path="*" element={<Navigate to="do" />} />
      </Routes>
    </div>
  );
}

export default Todolist;
