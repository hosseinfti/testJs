import React, { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div className="App">
      <div data-testid="counter" >{counter}</div>
      <button
      data-testid="increase"
        onClick={() => {
          handleIncreaseCounter();
        }}
      >
        increase
      </button>
    </div>
  );
}

export default App;
