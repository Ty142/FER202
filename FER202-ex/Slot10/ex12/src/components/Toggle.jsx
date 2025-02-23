import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS của Bootstrap

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const hanleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={hanleToggle}>
        {toggle ? "Hile" : "Show    "}
      </button>
      {toggle && <p>Click Hide that Script be hide</p>}
    </div>
  );
};

export default Toggle;
