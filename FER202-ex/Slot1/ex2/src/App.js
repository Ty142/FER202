import './App.css';

function App() {
 const People = 
 [
      {name : "Khang", age : 20},
      {name : "Minh", age : 20},
      {name : "sơn", age : 20},
      {name : "nam Son", age: 20},
      {name : "huân", age :20}
    ]

  return (
    <div className="App">
      <header className="App-header">
      <div id="vui">
        <ul>
          {People.map((People, index) => (
            <li  key={index}> tôi tên là {People.name}, {People.age} tuổi</li>
     ))}
        </ul>
      </div>
      </header>
    </div>
  );  
}

export default App;
