import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Body() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("./Images/pizza1.jpg")}
            className="d-block w-100"
            alt="First Slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Neapolitan Pizza</h1>
            <p className="fs-4">
              If you loooking for a traditional Italian Pizza, the Neapolitan is
              the best option!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require("./Images/pizza2.jpg")}
            className="d-block w-100"
            alt="Second Slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Neapolitan Pizza</h1>
            <p className="fs-4">
              If you loooking for a traditional Italian Pizza, the Neapolitan is
              the best option!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require("./Images/pizza3.jpg")}
            className="d-block w-100"
            alt="Third Slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Neapolitan Pizza</h1>
            <p className="fs-4">
              If you loooking for a traditional Italian Pizza, the Neapolitan is
              the best option!
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Body;
