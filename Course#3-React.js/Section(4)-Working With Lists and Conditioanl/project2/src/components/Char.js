import React, { Component } from "react";
import ReactDOM from "react-dom";

class Char extends Component {
  state = {
    letter: this.props.getLetter,
  };
  styles = {
    display: "inlineBlock",
    width: "300px",
    position: "relative",
    left: "530px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    border: "5px solid #FF9B71",
  };

  render() {
    return <div style={this.styles}>{this.state.letter} </div>;
  }
}

export default Char;
