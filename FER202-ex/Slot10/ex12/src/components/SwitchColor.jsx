import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SwitchColor() {
  const [selectedColor, setSelectedColor] = useState("white");

  const colors = [
    { value: "white", label: "Default" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
  ];

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div
      className="container mt-5 p-4"
      style={{ backgroundColor: selectedColor, minHeight: "50vh" }}
    >
      <div className="card p-4 shadow">
        <h2 className="card-title mb-3">Color Switcher</h2>
        <div className="mb-3">
          <label htmlFor="colorSelect" className="form-label">
            Choose a color:
          </label>
          <select
            id="colorSelect"
            className="form-select"
            value={selectedColor}
            onChange={handleColorChange}
          >
            {colors.map((color, index) => (
              <option key={index} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </div>
        <p className="mt-3">
          The current background color is <strong>{selectedColor}</strong>.
        </p>
      </div>
    </div>
  );
}

export default SwitchColor;
