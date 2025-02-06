import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold p-2 fs-1" href="#">
          Pizza House
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ marginLeft: "20px" }}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-3 ">
            <li className="nav-item p-3">
              <a className="nav-link active fs-5    " href="#">
                Home
              </a>
            </li>
            <li className="nav-item p-3">
              <a className="nav-link active fs-5" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item p-3">
              <a className="nav-link active fs-5    " href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            style={{ width: "400px" }}
          />
          <button className="btn btn-danger" type="submit">
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
