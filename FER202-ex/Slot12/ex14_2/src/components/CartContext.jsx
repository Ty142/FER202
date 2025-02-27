import React, { createContext, useState, useEffect } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "linear-gradient(135deg, #4caf50, #2196f3)", // Gradient xanh
  },
  dark: {
    foreground: "#ffffff",
    background: "linear-gradient(135deg, #000000, #333333)", // Gradient đen
  },
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState(themes.light);

  const addToCart = (dish) => setCartItems((prev) => [...prev, dish]);
  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCartItems([]);
  const toggleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light);
  const totalValue = cartItems
    .reduce((acc, item) => acc + parseFloat(item.price), 0)
    .toFixed(2);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalValue,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
