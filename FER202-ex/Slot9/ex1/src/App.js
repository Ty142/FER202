import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/NameList";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentCard from "./components/StudentCard";
import { Container, Row, Col } from "react-bootstrap";
import p1 from "./Images/st1.png";
import p2 from "./Images/st2.png";
import p3 from "./Images/st3.png";

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const students = [
    {
      name: "traltb1@fe.edu.vn",
      age: 39,
      avatar: p1,
    },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: p2 },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: p3 },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <Welcome name="fptdn@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard Student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
