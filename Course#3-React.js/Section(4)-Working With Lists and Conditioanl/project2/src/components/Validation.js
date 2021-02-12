import React, { Component } from "react";
import ReactDOM from "react-dom";
class Validation extends Component {

    render() { 
        return ( 
            <div>
                <h3>your paragraph length is {this.props.pLength}</h3>
            </div>

         );
    }
}
 
export default Validation;