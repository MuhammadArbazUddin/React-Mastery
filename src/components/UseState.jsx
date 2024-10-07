// import React, { useState } from "react";

// const UseStateComponent = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Counter : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Click</button>
//       <button onClick={() => setCount(count - 1)}>Click</button>
//     </div>
//   );
// };

// export default UseStateComponent;
import React, { useState } from "react";

const UseStateComponent = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>TODO LIST</h1>

      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />{" "}
        {/* Fix inputValue */}
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // Render each todo in the list
        ))}
      </ul>
    </div>
  );
};

export default UseStateComponent;
