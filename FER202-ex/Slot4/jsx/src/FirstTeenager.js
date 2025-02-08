function FirstTeenager() {
  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];

  return (
    <>
      <h2>
        FirstTeenager:
        {people
          .filter((person) => person.age >= 18 && person.age <= 30)
          .map((person, index) => (
            <p key={index}>
              {person.name}, {person.age}
            </p>
          ))}
      </h2>
    </>
  );
}
export default FirstTeenager;
