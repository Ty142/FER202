import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Hàm kiểm tra email
const isValidEmail = (value) => {
  return value.length >= 3;
};

// Hàm kiểm tra mật khẩu (ít nhất 8 ký tự)
const isValidPassword = (value) => {
  return value === "Đà Nẵng";
};

const isValidCheck = (value) => {
  return value === true;
};

const Formtext = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [validcheck, setValidCheck] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (isValidEmail(value)) {
      setIsEmailValid(true);
      setErrorMessage("");
    } else {
      setIsEmailValid(false);
      setErrorMessage("name must be at least 3 chacracter long");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (isValidPassword(value)) {
      setIsPasswordValid(true);
      setErrorMessage("");
    } else {
      setIsPasswordValid(false);
      setErrorMessage("Mật khẩu phải có ít nhất 8 ký tự.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Nếu cả email và password đều hợp lệ
    if (isValidEmail(email) && isValidPassword(password)) {
      // Thực hiện hành động gửi biểu mẫu
      console.log("Submit thành công!", { email, password });
    } else {
      setValidated(true);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheck = (e) => {
    setValidCheck(e.target.value);
  };
  return (
    <Container className="col-md-12 bg-white text-dark ">
      <h2 className="text-center context-dark">Đăng nhập</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className={"row justify-content-center"}
      >
        <Form.Group className="mb-3 col-md-7" controlId="ValidEmailInput">
          <Form.Label className="justify-content-left">Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
            isValid={isEmailValid === true}
            isInvalid={isEmailValid === false}
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 col-md-7">
          <Form.Label className="">Option</Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                id="ratio-option-1"
                label="male"
                name="ratioOptions"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                id="ratio-option-2"
                label="female"
                name="ratioOptions"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                id="ratio-option-3"
                label="Other"
                name="ratioOptions"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3 col-md-7" controlId="ValidatePassWord">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            isValid={isPasswordValid === true}
            isInvalid={isPasswordValid === false}
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 col-md-7">
          <Form.Check
            type="checkbox"
            id="ratio-option-3"
            label="I agree to term the codition"
            onChange={handleCheck}
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="text-center" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Formtext;
