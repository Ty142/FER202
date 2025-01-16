function PeopleList() {
  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];
  return (
    <h2>
      List people:{" "}
      {people.map((p, index) => (
        <ul>
          <li key={index}>
            {p.name}, {p.age}
          </li>
        </ul>
      ))}
    </h2>
  );
}
export default PeopleList;
