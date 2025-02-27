import React, { useContext } from "react";
import { CartProvider, CartContext } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pizza from "./Images/pizza.jpg";
import cheese from "./Images/ElaiCheeseCake.jpg";
import donut from "./Images/Vadonut.jpg";
import zu from "./Images/Zucchipakoda.jpg";

const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: pizza,
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: zu,
    price: "1.99",
    description: "Deep fried Zucchini with chickpea batter.",
  },
  {
    id: 2,
    name: "Vadonut",
    image: donut,
    price: "1.99",
    description: "A combination of vada and donut.",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: cheese,
    price: "2.99",
    description: "New York Style Cheesecake with Indian cardamoms.",
  },
];

function AppContent() {
  const { theme } = useContext(CartContext);

  return (
    <Container
      fluid
      style={{
        background: theme.background,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <ThemeToggleButton />
      <DishesList dishes={dishes} />
      <Cart />
    </Container>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
