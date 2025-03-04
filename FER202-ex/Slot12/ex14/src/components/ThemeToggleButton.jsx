import React, { useContext } from "react";
import ThemeContext, { themes } from "./ThemeContext";
import "../App.css";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-toggle-button "
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === themes.light ? "#4a90e2" : "#f39c12", // Dynamic button color
        color: theme.foreground,
      }}
    >
      Chuyển sang {theme === themes.light ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggleButton;
