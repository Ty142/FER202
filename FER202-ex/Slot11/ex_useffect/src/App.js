import logo from "./logo.svg";
import "./App.css";
import ValidatedInput from "./components/ValidateInput";
import InforPost from "./components/InforPost";
import Formtext from "./components/Formtext";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>-EX4_</h1>
        <ValidatedInput />
        <h1>-EX5-</h1>
        <InforPost />
        <h1>-EX5-</h1>
        <Formtext />
      </header>
    </div>
  );
}

export default App;
