import { memo } from "react";

const Card = () => {
  return (
    <div className="container">
      <div className="row border border-dark">
        <div className="col-md-6">
          <img
            className="pt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
            style={{ width: "400px" }}
          />
        </div>
        <div
          className="col-md-6 pt-4 fw-boild
    "
        >
          <h5>Hoai Nguyen - FPT Da Nang</h5>
          <p className="pt-2">mobile: 0982827763</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
