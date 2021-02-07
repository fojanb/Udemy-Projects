import React from "react";

//Function Component:
const person = (props)=> { //Arrow function
  return (
    <div>
      <h3>Hi I am {props.name} and I am {props.age} years old</h3>
    </div>
  );
}
export default person;
