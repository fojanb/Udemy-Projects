import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./UserInput.css";
import UserOutput from "./UserOutput";

// =============================================

class UserInput extends Component {
  render() {
    return (
      <div className="format">
        <p>Please insert your data</p>
        <br/>
        <input type="text" />
      </div>
    );
  }
}

export default UserInput;
