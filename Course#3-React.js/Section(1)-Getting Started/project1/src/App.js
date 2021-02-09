import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    //state is an js object
    userNames: [
      //userNames is array of js objects (JSON format)
      { name: "mike@gmail.com", id: 0 },
      { name: "jenny@shaw.ca", id: 1 },
      { name: "carol2020@hotmail.com", id: 2 },
      { name: "arieljackson@gmail.com", id:3 },
      { name: "nikkifox@yahoo.com", id: 4 },
    ],
  };
  clickHandler = (newName) => {
    //State management(updating the state):
    this.setState({
      userNames: [
        //userNames is array of js objects (JSON format)
        { name: newName + "@gmail.com", id: 0 },
        { name: "jenny@shaw.ca", id: 1 },
        { name: "carol2020@hotmail.com", id: 2 },
        { name: "arieljackson@gmail.com", id: 3 },
        { name: "nikkifox@yahoo.com", id: 4 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput
          // click={this.clickHandler.bind(this, "Fojan")}
          user={this.state.userNames[0].name}
        />
        <br />
        <UserOutput />
      </div>
    );
  }
}

export default App;
