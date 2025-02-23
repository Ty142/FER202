import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS của Bootstrap

const Input = () => {
  const [Input, setInput] = useState("");

  const handlePrint = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="container m-5">
      <input
        type="text"
        onChange={handlePrint}
        style={{
          width: "300px",
          height: "40px",
          borderRadius: "10px",
          fontSize: "20px",
        }}
        placeholder="Enter anything you want"
      />
      <h2>Input text: {Input}</h2>
    </div>
  );
};

export default Input;
