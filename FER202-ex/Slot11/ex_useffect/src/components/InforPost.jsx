import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Hàm kiểm tra email
const isValidEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
};

// Hàm kiểm tra mật khẩu (ít nhất 8 ký tự)
const isValidPassword = (value) => {
  return value.length >= 8;
};

const InforPost = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      setErrorMessage("Email không hợp lệ. Vui lòng nhập lại.");
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

  return (
    <Container className="col-md-12 bg-white text-dark ">
      <h2 className="text-center context-dark">Đăng nhập</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className={"row justify-content-center"}
      >
        <Form.Group className="mb-3 col-md-6" controlId="ValidEmailInput">
          <Form.Label className="justify-content-left">Email</Form.Label>
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

        <Form.Group className="mb-3 col-md-6" controlId="ValidatePassWord">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
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

        <Button className="text-center" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default InforPost;
