import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="container bg-dark ">
      <div className="body">
        <div className="row">
          <h1>Our Menu</h1>
          <div className="col-sm-3">
            <div className="card">
              <img src={require("./Images/menu1.jpg")}></img>
              <div className="MenuDetail bg-white">
                <h3 className="title pt-4 p-3">Margherita Pizza</h3>
                <p>
                  <span class="old-price pl-3">$40.00</span>
                  <span class="new-price text-warning">$24.00</span>
                </p>
                <button className="btn btn-dark">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
