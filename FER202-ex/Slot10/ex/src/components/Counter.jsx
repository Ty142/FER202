import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
