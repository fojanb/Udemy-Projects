import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./components/Char.css";
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends Component {
  state = {
    words: "", //string ===> 'Paragraph' is stored here
    lengthInApp: 0, //initial
  };

  // -----------functions and eventHandler--------------
  newLetterHandler = (event) => {
    //This method are updating our 'words' in state
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

  showLetterInChar = (index) => {
    return this.state.words.charAt(index); //'words' is string here
  };

  letterDeleteHandler = (index) => {
    let words = this.state.words.split(""); //Fetch a ""copy"" of words(Array of Objects) in state via slice()
    //and convert it to an array via split()
    words.splice(index, 1);
    this.setState({ words: words.join("") });
  };
  // -----------------------------------------------------
  render() {
    let letter = null;
    if (true) {
      letter = (
        <div className="wrapper">
          {/* change words ='abc' to words=['a','b','c'] via split(''), then you can use map()*/}
          {/* Since map() only works for array not string */}
          {/* Creating a list of Char component based on words in state */}
          {this.state.words.split("").map((letter, index) => {
            //words turns to array here
            return (
              <Char
                click={() => this.letterDeleteHandler(index)}
                getLetter={this.showLetterInChar(index)}
              ></Char>
            );
          })}
        </div> //wrapper
      );
    }
    return (
      <div className="App">
        <h3>Please type your paragraph down below</h3>
        <textarea
          type="text"
          rows="8"
          cols="40"
          placeholder="Maximum character 100"
          onChange={(event) => this.newLetterHandler(event)}
        />
        {/* or : <textarea type="text" rows= '8' onChange={this.newLetterHandler}/> */}

        <p>Character count : {this.countLetter()} </p>

        <Validation paragraphLength={this.state.lengthInApp} />
        {letter}
      </div>
    );
  }
}

export default App;
