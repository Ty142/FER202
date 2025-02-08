import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="container-fluid bg-dark py-4">
      <div className="row justify-content-center">
        <h2
          className="text-white 
          pt-2
        "
          style={{ paddingLeft: "17%" }}
        >
          Our Menu
        </h2>

        <div className="col-sm-2 mb-4">
          <div className="card">
            <div className="position-relative">
              <img
                src={require("./Images/menu1.jpg")}
                className="card-img-top"
                alt="Margherita Pizza"
              />
              <span className="bg-warning text-dark position-absolute top-0 start-0 w-25 text-center">
                SALE
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Margherita Pizza</h5>
              <p className="price">
                <span className="old-price text-muted me-2">
                  <del>$40.00</del>
                </span>
                <span className="new-price text-warning">$24.00</span>
              </p>
              <button className="btn btn-dark btn-sm w-100">Buy</button>
            </div>
          </div>
        </div>
        <div className="col-sm-2 mb-4">
          <div className="card">
            <div className="position-relative">
              <img
                src={require("./Images/menu2.jpg")}
                className="card-img-top"
                alt="Mushroom Pizza"
              />
            </div>
            <div className="card-body ">
              <h5 className="card-title">Mushroom Pizza</h5>
              <p className="price">
                <span className="new-price ">$25.00</span>
              </p>
              <button className="btn btn-dark btn-sm w-100">Buy</button>
            </div>
          </div>
        </div>
        <div className="col-sm-2 mb-4">
          <div className="card">
            <div className="position-relative">
              <img
                src={require("./Images/menu3.jpg")}
                className="card-img-top"
                alt="Hawaiian Pizza"
              />
              <span className="bg-warning text-dark position-absolute top-0 start-0 w-25 text-center">
                NEW
              </span>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Hawaiian Pizza</h5>
              <p className="price">
                <span className="new-price ">$30.00</span>
              </p>
              <button className="btn btn-dark btn-sm w-100">Buy</button>
            </div>
          </div>
        </div>

        <div className="col-sm-2 mb-4">
          <div className="card">
            <div className="position-relative">
              <img
                src={require("./Images/menu4.jpg")}
                className="card-img-top"
                alt="Pesto Pizza"
              />
              <span className="bg-warning text-dark position-absolute top-0 start-0 w-25 text-center">
                SALE
              </span>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Pesto Pizza</h5>
              <p className="price">
                <span className="old-price text-muted me-2">
                  <del>$50.00</del>
                </span>
                <span className="new-price text-warning">$30.00</span>
              </p>
              <button className="btn btn-dark btn-sm w-100">Buy</button>
            </div>
          </div>
        </div>
        <div className="Booktable">
          <div className="require">
            <h2
              className="text-white
              text-center
              pt-5
            "
            >
              Book Your Table
            </h2>
            <form className="p-4 bg-dark text-white rounded">
              <div className="row mb-3 justify-content-center">
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option>Select a Service</option>
                    <option>Reservation</option>
                    <option>Delivery</option>
                    <option>Takeaway</option>
                  </select>
                </div>
              </div>
              <div className="row justify-content-center pt-5">
                <div className="mb-3 col-9">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Please write your comment"
                  ></textarea>
                </div>
                <div className="text-start">
                  <button className="btn btn-warning px-4">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
