import logo from "./logo.svg";
import "./App.css";
import Count from "./components/Count";
import Input from "./components/Input";
import Toggle from "./components/Toggle";
import TodoList from "./components/TodoList";
import SearchFilter from "./components/SearchFilter";
import SwitchColor from "./components/SwitchColor";
import DragAndDropList from "./components/DragAndDropList";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        <Input />
        <Toggle />
        <TodoList />
        <SearchFilter />
        <SwitchColor />
        <DragAndDropList />
      </header>
    </div>
  );
}

export default App;
