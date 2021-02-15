import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./Char.css";

class Char extends Component {
  state = {
    letter: this.props.getLetter,
  };
  styles = {
    display: "inlineBlock",
    width: "100px",
    position: "relative",
    left: "634px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    border: "5px solid #2d3047",
    backgroundColor: "#FF9B71",
  };

  render() {
    return <div style={this.styles}>{this.state.letter}</div>;
  }
}

export default Char;
