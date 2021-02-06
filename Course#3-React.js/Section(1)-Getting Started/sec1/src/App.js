//App.js is our react component (Function Component)
import React, { Component } from "react"; //React.createElement() is from here
import "./App.css";
import Person from "./components/Person";

//----------------------Class Component :---------------------------
class App extends Component { //Class Component
  render() {
    //Method #1 :
    return (
      <div className="app">
        <h1>Hi, I am a react app</h1>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>

      </div>
    );
    //Method#2 :
    // return React.createElement('div',{className:'app'},React.createElement('h1',null,'I am Fojan'))
  }
}
export default App;
// --------------------Function Component :--------------------------
// function App(props) { //Function Component
//   return (
//     <div className="app">
//       <h3>Name: {props.name}</h3>
//       <p>Age : {props.age}</p>
//     </div>

//   );
// }

// export default App;
