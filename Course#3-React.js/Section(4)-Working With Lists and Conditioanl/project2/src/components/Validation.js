import React, { Component } from "react";
import ReactDOM from "react-dom";
class Validation extends Component {
  state = {
    lenghtInValidation: 0, //initial
  };
//--------------------------functions--------------------------------
  stateUpdate = () => {
    this.state.lenghtInValidation = this.props.paragraphLength;
  };
  compareLength = () => {
    if (this.state.lenghtInValidation <= 5) {
      return <h3>Too short</h3>;
    } else {
      if (this.state.lenghtInValidation >= 100) {
        return <h3>Too long</h3>;
      } else {
        return <h3>Perfect length ! keep typing.</h3>;
      }
    }
  };
// ------------------------------------------------------------------
  render() {
    return (
      //All JSX are here
      <div>
        {this.stateUpdate()}
        {this.compareLength()}
        <h3></h3>
      </div>
    );
  }
}

export default Validation;
