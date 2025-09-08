import "./App.css";
import { useContext } from "react";
import { TodoContext } from "./context/Todo";

function App() {
  const todoContext = useContext(TodoContext);

  function handleChange(event) {
    todoContext.setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    todoContext.setTodo([...todoContext.todo, todoContext.value]);
    todoContext.setValue("");
  }

  function RemoveTodo(i) {
    todoContext.setTodo(todoContext.todo.filter((_, index) => i !== index));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">Enter Text:</label>
        <input
          id="textInput"
          type="text"
          value={todoContext.value}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todoContext.todo.map((data, index) => (
          <li key={index}>
            {data} <button onClick={() => RemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
