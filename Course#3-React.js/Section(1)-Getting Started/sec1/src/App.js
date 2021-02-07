//App.js is our react component (Function Component)
import React, { Component } from "react"; //React.createElement() is from here
import "./App.css";
import Person from "./components/Person";

//----------------------Class Component :---------------------------
class App extends Component { //Class Component
  state={ //State is an JS object
    persons:[ //persons is array of objects (JSON format)
      {name:'Mike' , age:20},
      {name:'Jenny', age:32},
      {name:'Niel' , age:40}
    ]
  };
  eventHandler = () =>{
    console.log('You clicked the button!');
  }
  render() {
    //Method #1 :
    return (
      <div className="app">
        <button onClick={()=>{this.eventHandler}}>Swith Name</button>
        <h1>Hi, I am a react app</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby : Chess</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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
