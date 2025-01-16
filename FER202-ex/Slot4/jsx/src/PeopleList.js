function PeopleList() {
  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];
  return (
    <div>
      <h2>
        3. List people:{" "}
        {people.map((p, index) => (
          <ul>
            <li key={index}>
              {p.name}, {p.age}
            </li>
          </ul>
        ))}
      </h2>

      <h2>4. table PeopleList</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PeopleList;
