function NamePerson() {
  const names = ["Alice", "Bob", "Charlie"];

  const person = {
    name: "khang",
    age: 25,
    occupation: "Software Engineer",
  };
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}> {name}</li>
        ))}
      </ul>

      <h2>
        {" "}
        2. Display person( Name {person.name}, age: {person.age}, occupation:{" "}
        {person.occupation})
      </h2>

      <table>
        <thead>
          <tr>Name</tr>
          <tr>Age</tr>
        </thead>
        <tbody>
          <></>
        </tbody>
      </table>
    </div>
  );
}
export default NamePerson;
