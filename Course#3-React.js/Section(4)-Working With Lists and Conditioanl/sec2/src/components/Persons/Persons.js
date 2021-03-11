import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>
    props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)} //A list
        change={(event)=>props.changed(event,person.id)}
        name={person.name}
        age={person.age}
        key={person.id} //Key is UNIQUE since id is unique
      ></Person>
    )});
export default Persons;