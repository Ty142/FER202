import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="container ">
      <button
        onClick={handleIncrement}
        style={{ width: "150px", height: "50px", fontSize: "20px" }}
        className="btn btn-warning
        "
      >
        Increment
      </button>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default Count;
