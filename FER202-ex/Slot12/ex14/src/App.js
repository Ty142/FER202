import React from "react";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <header>
      <ThemeProvider>
        <div>
          <h1>Welcome to React!</h1>
          <ThemeToggleButton />
        </div>
      </ThemeProvider>
    </header>
  );
}

export default App;
