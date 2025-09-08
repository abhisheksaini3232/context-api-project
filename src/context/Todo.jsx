import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState(["todo"]);
  const [value, setValue] = useState("");

  return (
    <TodoContext.Provider value={{ todo, setTodo, value, setValue }}>
      {props.children}
    </TodoContext.Provider>
  );
};
