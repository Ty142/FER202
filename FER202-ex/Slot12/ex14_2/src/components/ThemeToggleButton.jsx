import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(CartContext);

  return (
    <Button
      variant={theme === theme.light ? "primary" : "dark"}
      onClick={toggleTheme}
      className="mb-4 mx-auto d-block"
    >
      Chuyển sang {theme === theme.light ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeToggleButton;
