import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Container, ListGroup, Button, Alert } from "react-bootstrap";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalValue, theme } =
    useContext(CartContext);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    if (cartItems.length > 0) {
      setIsOrderConfirmed(true);
      clearCart();
      setTimeout(() => setIsOrderConfirmed(false), 3000);
    }
  };

  return (
    <Container className="my-4" style={{ color: theme.foreground }}>
      <h2 className="text-center mb-4">Giỏ hàng</h2>
      {cartItems.length === 0 && !isOrderConfirmed ? (
        <p className="text-center">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <>
          <ListGroup className="mb-4">
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                variant={theme === theme.light ? "light" : "dark"}
                className="d-flex justify-content-between align-items-center"
              >
                {item.name} - ${item.price}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="text-center">
            <p>Tổng số món: {cartItems.length}</p>
            <p>Tổng giá trị: ${totalValue}</p>
            <Button variant="secondary" className="me-2" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button variant="warning" onClick={handleConfirmOrder}>
              Xác nhận đơn hàng
            </Button>
          </div>
        </>
      )}
      {isOrderConfirmed && (
        <Alert variant="success" className="mt-3 text-center">
          Thanh toán thành công! Cảm ơn bạn đã đặt hàng.
        </Alert>
      )}
    </Container>
  );
};

export default Cart;
