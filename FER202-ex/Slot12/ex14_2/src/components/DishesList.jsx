import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const DishesList = ({ dishes }) => {
  const { addToCart, theme } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-4" style={{ color: theme.foreground }}>
      <h2 className="text-center mb-4">Danh sách món ăn</h2>
      <Form.Control
        type="text"
        placeholder="Tìm kiếm món ăn..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredDishes.map((dish) => (
          <Col key={dish.id}>
            <Card
              style={{
                backgroundColor: theme === theme.light ? "#ffffff" : "#444444", // Nền trắng (light) hoặc xám đậm (dark)
                color: theme.foreground,
                border: "1px solid #ccc",
              }}
            >
              <Card.Img
                variant="top"
                src={dish.image}
                alt={dish.name}
                style={{ height: "200px", objectFit: "cover" }} // Cố định chiều cao, giữ tỷ lệ
              />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Card.Text>
                  Price: ${parseFloat(dish.price).toFixed(2)}
                </Card.Text>
                <Button variant="success" onClick={() => addToCart(dish)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DishesList;
