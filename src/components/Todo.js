import React, { useEffect } from "react";
import Input from "./Input";

function Todo({ todos, removeTodo }) {
  useEffect(() => {
    console.log(todos);
  });

  //   return (
  //     <div>
  //       <h1>abc</h1>
  //       {/* <Input onSubmit={addTodo} />
  //         <Todo todos={todos} /> */}
  //     </div>
  //   );

  return todos.map((todos, index) => (
    <>
      <div key={index}>
        <div>{todos.do}</div>
        <button onClick={() => removeTodo(todos.id)}>delete</button>
      </div>
    </>
  ));
}

export default Todo;
