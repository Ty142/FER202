import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ Student }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={Student.avatar}
        alt={`${Student.name}'s avatar`}
      />
      <Card.Body>
        <Card.Title>{Student.name}</Card.Title>
        <Card.Text>Age: {Student.age}</Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
