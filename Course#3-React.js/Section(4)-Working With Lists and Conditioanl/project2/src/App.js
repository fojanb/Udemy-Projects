import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./components/Validation.js"
import Validation from "./components/Validation";

class App extends Component {
  state = {
    words: [], //Array of words ===> 'Paragraph' 
  };

  // -----------functions and eventListener--------------
  newWord = (event) => {
    const str = event.target.value;
    this.setState({ words: str });
  };
  countLetter = () => {
    let c = 0;
    for (let index = 1; index <= this.state.words.length; index++) {
      c = c + 1;
    }
    return c;
  };
  // -----------------------------------------------------
  render() {
    return (
      <div className='App'>
        <h3>Please insert a word down below:</h3>
        <textarea type="text" rows= '8' placeholder='Type a paragraph here...' 
        onChange={(event) => this.newWord(event)} />
        {/* or :<textarea type="text" rows= '8' onChange={this.countLetters/> */}

        <p>Character count : {this.countLetter()} </p>

        <Validation pLength={this.state.words.length}/>
      </div>
    );
  }
}

export default App;
