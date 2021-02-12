import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./components/Validation.js";
import Validation from "./components/Validation";

class App extends Component {
  state = {
    words: [], //Array of words ===> 'Paragraph' is stored here
    lengthInApp: 0, //initial
  };

  // -----------functions and eventListener--------------
  newWord = (event) => {
    const str = event.target.value;
    this.setState({ words: str });
  };
  countLetter = () => {
    let c = 0; //initial
    for (let index = 1; index <= this.state.words.length; index++) {
      c = c + 1;
    }
    this.state.lengthInApp = c;
    return c;
  };

  // -----------------------------------------------------
  render() {
    return (
      <div className="App">
        <h3>Please type your paragraph down below:</h3>
        <textarea
          type="text"
          rows="8"
          placeholder="Minimum character is 5 and maximum character is 100"
          onChange={(event) => this.newWord(event)}
        />
        {/* or : <textarea type="text" rows= '8' onChange={this.newWord}/> */}

        <p>Character count : {this.countLetter()} </p>

        <Validation paragraphLength={this.state.lengthInApp} />
      </div>
    );
  }
}

export default App;
