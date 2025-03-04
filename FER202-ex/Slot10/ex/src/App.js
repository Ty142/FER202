import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Infor from "./components/Infor";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <>
      <Counter />
      <Infor />
      <ProductList />
      <SearchFilter />
    </>
  );
}

export default App;
