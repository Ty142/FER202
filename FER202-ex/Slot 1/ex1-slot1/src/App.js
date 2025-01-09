import logo from './logo.svg';
import './App.css';

function App() {
  const Person = {
    name: 'John Doe',
    age: 30,
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> 
        Tôi tên là {Person.name}, {Person.age} tuổi
        </h1>
      </header>
    </div>
  );
}

export default App;
