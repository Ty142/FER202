import React from "react";

function AreAllTeenagers() {
  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];

  const people1 = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Doctor" },
    { name: "Charlie", age: 28, occupation: "Engineer" },
    { name: "Diana", age: 24, occupation: "Doctor" },
    { name: "Eve", age: 35, occupation: "Artist" },
  ];

  function sortPeopleByOccupationAndAge(people1) {
    return people1.sort((a, b) => {
      if (a.occupation < b.occupation) return -1;
      if (a.occupation > b.occupation) return 1;
      return a.age - b.age;
    });
  }
  const sortPeopleList = sortPeopleByOccupationAndAge([...people1]);

  function groupPeopleByOccupation(people1) {
    return people1.reduce((acc, person) => {
      if (!acc[person.occupation]) {
        acc[person.occupation] = [];
      }
      acc[person.occupation].push(person);
      return acc;
    }, {});
  }
  const groupPeople = groupPeopleByOccupation(sortPeopleList);

  function findOldestAndYoungest(people) {
    const youngest = people.reduce((youngest, person) => {
      return person.age < youngest.age ? person : youngest;
    }, people[0]);

    const oldest = people.reduce((oldest, person) => {
      return person.age > oldest.age ? person : oldest;
    }, people[0]);

    return { youngest, oldest };
  }

  const { youngest, oldest } = findOldestAndYoungest(people1);

  return (
    <>
      <h2>
        6. check all Teenager:{" "}
        {people.filter((p) => p < 18 || p > 30) ? `false` : `true`}
      </h2>

      <h2> Sort by Occupation and Then by Age</h2>
      <ul>
        {sortPeopleList.map((p, index) => (
          <li>
            {p.name} ,{p.age} ,{p.occupation}
          </li>
        ))}
      </ul>

      <h2>8.Group People by Occupation</h2>
      <ul>
        {Object.keys(groupPeople).map((occupation) => (
          <li key={occupation}>
            <h3>{occupation}</h3>
            <ul>
              {groupPeople[occupation].map((person, index) => (
                <li key={index}>
                  {person.name}, {person.age}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2>Find the Oldest and Youngest Person</h2>
      <p>
        {" "}
        {youngest.name}, {youngest.age}
      </p>
      <p>
        {" "}
        {oldest.name}, {oldest.age}
      </p>
    </>
  );
}

export default AreAllTeenagers;
