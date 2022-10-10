import React, {useState} from "react";

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );

    setInput("");
  };

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>Todos...</h3>
      <input
        type='text'
        placeholder='input todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add todo</button>
      <ul>
        {todos.map(({text, id}) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => handleRemove(id)}>Remove {text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
