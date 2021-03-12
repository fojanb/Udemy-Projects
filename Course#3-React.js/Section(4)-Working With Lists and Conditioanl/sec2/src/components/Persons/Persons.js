import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
  console.log("[Persons.js] rendering...");
  // We did loop over props.persons actually:
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)} //A list
        change={(event) => props.changed(event, person.id)}
        name={person.name}
        age={person.age}
        key={person.id} //Key is UNIQUE since id is unique
      ></Person>
    );
  });
};

export default Persons;
