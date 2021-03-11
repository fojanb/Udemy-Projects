import React from "react";
const Cockpit = (props) => {
  return (
    <div>
      <button style={props.styles} onClick={props.toggled}>
        Toggle Persons
      </button>
      <h1>-- Hi, I am a react app --</h1>
    </div>
  );
};

export default Cockpit;
