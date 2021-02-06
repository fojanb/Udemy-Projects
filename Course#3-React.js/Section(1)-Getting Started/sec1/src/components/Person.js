import React from "react";

//Function Component:
const person = ()=> { //Arrow function
  return (
    <div>
      <h3>Hi I am Person and I am {Math.floor(Math.random()*30)} years old</h3>
    </div>
  );
}
export default person;
