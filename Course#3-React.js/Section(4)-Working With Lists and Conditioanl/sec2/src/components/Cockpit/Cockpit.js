import React, { useEffect } from "react";
const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request...
  });
  return (
    <div>
      <button style={props.styles} onClick={props.toggled}>
        {props.title}
      </button>
      <h1>-- Hi, I am a react app --</h1>
    </div>
  );
};

export default Cockpit;
