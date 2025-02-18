import React from "react";
import { Container, Row, Col, Nav, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <Container
      fluid
      className="bg-eacdad d-flex"
      style={{ backgroundColor: "rgb(234, 205, 173)" }}
    >
      <Row className="align-items-center f-flex">
        {/* Cột chứa logo + menu */}
        <Col md={9}>
          <div className="d-flex items">
            {/* Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
              className="bg-eacdad mt-2 fpt-logo ps-5"
              alt="FPT Logo"
              style={{ width: "300px" }}
            />

            {/* Navigation */}
            <Nav className="a-items d-flex mt-2 ps-2">
              <Nav.Link href="#" className="mt-4 d-flex pe-2 text-orange">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                  className="icon bg-orange "
                  alt="Trang Chủ"
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ color: "orange" }}>Trang Chủ</span>
              </Nav.Link>

              <Nav.Link href="#" className="mt-4 d-flex pe-2 text-orange">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/12589/12589242.png"
                  className="icon bg-orange"
                  alt="Ngành Học"
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ color: "orange" }}>Ngành Học</span>
              </Nav.Link>

              <Nav.Link href="#" className="mt-4 d-flex pe-2 text-orange">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png"
                  className="icon bg-orange"
                  alt="Tuyển Sinh"
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ color: "orange" }}>Tuyển Sinh</span>
              </Nav.Link>

              <Nav.Link href="#" className="mt-4 d-flex pe-2 text-orange">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png"
                  className="icon bg-orange"
                  alt="Sinh Viên"
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ color: "orange" }}>Sinh Viên</span>
              </Nav.Link>
            </Nav>
          </div>
        </Col>

        {/* Cột chứa ô tìm kiếm */}
        <Col md={3}>
          <div className="search d-flex mt-4 ps-5">
            <span className="pe-2">Search:</span>
            <Form.Control
              type="text"
              className="ps-2"
              placeholder="Tìm kiếm..."
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
