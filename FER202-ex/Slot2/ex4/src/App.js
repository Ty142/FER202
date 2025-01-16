import "./App.css";
import logo from "./logo.svg";
import React, { useCallback, useState } from "react";

function App() {
  const incrementer = createIncrementer(); // tạo 1 instance khi render
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("");
  const [queryParams, setQueryParams] = useState({});
  const increment = useCallback(() => {
    // Chỉ tạo hàm 1 lần khi render
    setCount(incrementer());
  }, [incrementer]);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleParseUrl = () => {
    const params = parseQueryParams(url);
    setQueryParams(params);
  };
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },

    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const style1 = { background: " rgb(44, 133, 83)" };
  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];
  var array = [1, 2, 3, 4];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const newObject = {
    ...companies[0],
  };

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };

  const {
    address: { street },
  } = person;

  companies.forEach((p) => console.log(`${companies.name}`));
  return (
    <div className="App">
      <header className="App-header">
        <>
          <h2>
            Hello
            <span style={{ color: "blue", fontWeight: "bolder" }}> React </span>
          </h2>
          <div id="icon">
            <img class="App-logo" src={logo} alt="Logo" />
            <h3
              style={{
                color: "rgb(36, 83, 92)",
                fontStyle: "italic",
                marginBottom: "0px",
              }}
            >
              This is the best React Logo!
            </h3>
            <p
              style={{
                fontStyle: "italic",
                color: "gray",
                fontSize: "20px",
                marginTop: "0px",
              }}
            >
              (i don't know why it is here either)
            </p>

            <p style={{ marginTop: "20px", fontSize: "25px", color: "black" }}>
              The library for web and native user interfaces
            </p>
          </div>
          <div id="nav">
            <ul id="nav-ul" style={{ display: "flex" }}>
              <li style={style1}>Home</li>
              <li>Search</li>
              <li>Contact</li>
              <li style={{ background: "black" }}>Login</li>
            </ul>
          </div>

          <h1 style={{ color: "blue", fontSize: "bolder" }}> This is JSX</h1>
          <h1> Course Name </h1>
          <ul>
            <li> React </li>
            <li> ReactNative</li>
            <li> NodeJs </li>
          </ul>
          <div>
            <h1>JSX and SE6 EX1</h1>
            <h2>
              The fisrt person is:{" "}
              {people.find((p) => p.age >= 10 && p.age <= 20).name}
            </h2>
            <h2>List Person: </h2>
            {people
              .filter((p) => p.age >= 10 && p.age <= 20)
              .map((p, index) => (
                <ul>
                  <li key={index}>{p.name}</li>
                </ul>
              ))}
            <h2>
              Check Teenager List{" "}
              {people.find((p) => p.age < 10 || p.age > 20) ? "false" : "true"}
            </h2>
            <h2> display Full List After Check </h2>
            {people.map((p, index) => (
              <ul>
                <li key={index}>
                  {p.name},{p.age < 10 || p.age > 20 ? "false" : "true"}
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h1>JSX and SE6 EX2</h1>
            <h2>the accumulator : {array.reduce((acc, p) => acc + p)}</h2>
            <h2>
              Product of all Element : {array.reduce((acc, p) => acc * p)}
            </h2>
          </div>
          <div>
            <h1>JSX and SE6 EX3</h1>
            <h2>List Company</h2>
            <ul>
              {companies.map((c, index) => (
                <li key={index}>{c.name}</li>
              ))}
            </ul>
            <h2>List Company Start after 1987</h2>
            <ul>
              {companies
                .filter((c) => c.start > 1987)
                .map((c, index) => (
                  <li key={index}>
                    Name: {c.name}, Year: {c.start}
                  </li>
                ))}
            </ul>
            <h2 id="tb">Table List</h2>
            <table border={1}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Year Start</th>
                  <th>Year End</th>
                </tr>
              </thead>
              <tbody>
                {companies
                  .filter((c) => c.category === "Retail")
                  .map((c, index) => (
                    <tr key={index}>
                      <td>{c.name}</td>
                      <td>{c.start}</td>
                      <td>{c.end}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <h2>Sort Company by End Date</h2>
            <ul>
              {companies
                .sort((a, b) => a.end - b.end)
                .map((c, index) => (
                  <li key={index}>
                    {c.name}, {c.end}
                  </li>
                ))}
            </ul>
            <h2>Sort Age Descending </h2>
            <ul>
              {ages
                .sort((a, b) => b - a)
                .map((age, index) => (
                  <li key={index}>{age}</li>
                ))}
            </ul>
            <h2>Sum of Age</h2>
            <p>Sum of Age: {ages.reduce((a, b) => a + b)}</p>
            <h2>Print New Object</h2>
            <p>Name: {newObject.name}</p>
            <p>Category: {newObject.category}</p>

            <h2> Sum of 3,4,5,6 is {randomSumNumber(3, 4, 5, 6)} </h2>

            <h2>
              {" "}
              Destructuring the property person street in Object person:{" "}
              {street}
            </h2>

            <h2>
              collectIntoArray:
              {collectIntoArray(1, "xin chào", [2, 3], [4, 5])}
            </h2>

            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h2>Count: {count}</h2>
              <button
                onClick={increment}
                style={{ padding: "10px", marginTop: "20px" }}
              >
                Increment
              </button>
            </div>

            <div>
              <h1>Parse URL Query Parameters</h1>
              <input
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="Enter URL"
              />
              <button onClick={handleParseUrl}>Parse URL</button>
              <h4>Query Parameters:</h4>
              <pre>{JSON.stringify(queryParams, null, 2)}</pre>
            </div>
          </div>
          <div>
            <h1>JSX and SE6 EX4</h1>
          </div>
        </>
      </header>
    </div>
  );
}

function randomSumNumber(...arr) {
  const result = arr.reduce((sum, num) => num + sum);
  return result;
}

function collectIntoArray(...args) {
  return args.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...item];
    } else {
      return [...acc, item];
    }
  }, []);
}

function createIncrementer() {
  let count = 0; // Initialize counter
  return function () {
    return count++; // Increment and return
  };
}

function parseQueryParams(url) {
  const queryParams = {};
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });
  } catch (error) {
    console.error("Invalid URL");
  }
  return queryParams;
}

// Usage:
const incrementer = createIncrementer();
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());

export default App;
