import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./Char.css";

class Char extends Component {
  styles = {
    display: "inline",
    width: "60px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    border: "3px solid #2d3047",
    backgroundColor: "#FF9B71",
  };

  render() {
    return (
      <div style={this.styles} onClick={this.props.click}>
        {this.props.getLetter}
      </div>
    );
  }
}

export default Char;
