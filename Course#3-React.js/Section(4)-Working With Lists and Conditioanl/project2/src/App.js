import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends Component {
  state = {
    words: " ", //string ===> 'Paragraph' is stored here
    lengthInApp: 0, //initial
  };

  // -----------functions and eventHandler--------------
  newWordHandler = (event) => {
    //This method are updating our state
    const str = event.target.value;
    this.setState({ words: str });
  };
  countLetter = () => {
    let c = 0; //initial
    for (let index = 0; index < this.state.words.length; index++) {
      c = c + 1;
    }
    this.state.lengthInApp = c; // State update
    return c;
  };
  showLetterinChar = (index) => {
    return this.state.words.charAt(index);//words is string here
  };

  // -----------------------------------------------------
  render() {
    let letters = null;
    if (true) {
      letters = (
        <div>
          {/* change words ='abc' to words=['abc'] via split(''), then you can use map()*/}
          {/* Since map() only works for array not string */}
          {this.state.words.split("").map((letter, index) => { //words turns to array here
            return (
              <Char
                // click={() => this.letterDeleteHandler(index)} //A list
                getLetter={this.showLetterinChar(index)}
              ></Char>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h3>Please type your paragraph down below</h3>
        <textarea
          type="text"
          rows="8"
          placeholder="Maximum character 100"
          onChange={(event) => this.newWordHandler(event)}
        />
        {/* or : <textarea type="text" rows= '8' onChange={this.newWordHandler}/> */}

        <p>Character count : {this.countLetter()} </p>

        <Validation paragraphLength={this.state.lengthInApp} />
        {letters}
      </div>
    );
  }
}

export default App;
