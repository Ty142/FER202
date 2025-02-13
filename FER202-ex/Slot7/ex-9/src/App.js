import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import SimpleReact from "./Components/SimpleReact";
import Button from "./Components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileFPT from "./Components/ProfileFPT";
import Card from "./Components/Card";
function App() {
  return (
    <div className="App">
      <AboutUs />
      <SimpleReact />
      <Button />
      <Card />
      <ProfileFPT />
    </div>
  );
}

export default App;
