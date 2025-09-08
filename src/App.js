import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(["comb hair", "hello", "yeah"]);
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodo([...todo, value]);
    setValue("");
  }

  function RemoveTodo(i) {
    setTodo(todo.filter((_, index) => i !== index));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">Enter Text:</label>
        <input
          id="textInput"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todo.map((data, index) => (
          <li key={index}>
            {data} <button onClick={() => RemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
