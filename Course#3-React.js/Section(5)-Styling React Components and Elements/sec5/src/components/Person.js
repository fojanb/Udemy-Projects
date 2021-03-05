import React from "react";
// import "./Person.css";
import styled from "styled-components";
const StyledPerson = styled.div`
     {
      //  Regular CSS here :
      font-family: monospace;
      border: 0px solid black;
      border-radius: 10px;
      box-shadow: 5px 5px lightslategray;
      background-color: gold;
      width: 300px;
      height: 120px;
      text-align: center;
      margin: 0 auto;
      &:hover {
        /*Pseudo selectors in 'styled-components'*/
        color: rgb(156, 12, 212);
      }
    }
  `;
//Function Component: Arrow function
const person = (props) => {
  
  return (
    <StyledPerson>
      <h3 onClick={props.click}>
        Hi I am {props.name} and I am {props.age} years old
      </h3>
      {/* <p>{props.children}</p> */}
      <input type="text" onChange={props.change} value={props.name} />
    </StyledPerson>
  );
};
export default person;
