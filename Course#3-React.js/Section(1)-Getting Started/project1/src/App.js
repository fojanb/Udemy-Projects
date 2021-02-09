import './App.css';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {//state is an js object 
    userNames: [
      //userNames is array of js objects (JSON format)
      { name: "mike@gmail.com"},
      { name: "jenny@shaw.ca"},
      { name: "carol2020@hotmail.com"},
      { name: "arieljackson@gmail.com"},
      { name: "nikkifox@yahoo.com"}
    ]
   }
   clickHandler = () =>{
     this.setState(state.userNames[0].name);

   }
  render() { 
    return (
      <div className="App">
      <UserInput/>
      <UserOutput click={this.clickHandler}/>
      <br/>
      <UserOutput />
      </div>
    );
  }
}
 
export default App;
