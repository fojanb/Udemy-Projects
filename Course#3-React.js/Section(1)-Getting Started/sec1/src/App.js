//App.js is our react component (Function Component)
// import React, { Component } from "react"; //React.createElement() is from here
import "./App.css";
import React, { useState } from "react";
import Person from "./components/Person";

//----------------------Function Component :---------------------------
const app = (props) => {
  //Function Component
  const [personState, setPersonState] = useState({
    persons: [
      //persons is array of objects (JSON format)
      { name: "Mike", age: 20 },
      { name: "Jenny", age: 32 },
      { name: "Niel", age: 40 },
    ],
    otherState :'Other type of state'
  });
  console.log(personState);
  // console.log(setPersonState);

  const eventHandler = () => {
    console.log("You clicked the button!");
    //DO NOT DO THIS : this.state.persons[0].name="Fojan"
    setPersonState({
      //setState() is a method in Component class and App inheret it.
      persons: [
        { name: "Fojan", age: 20 },
        { name: "Jenny", age: 32 },
        { name: "Niel", age: 40 },
      ],
      otherState :'Other type of state' //or otherState :personState.otherState


    });
  };

  //Method #1 :
  return (
    <div className="app">
      <button onClick={eventHandler}>Swith Name</button>
      <h1>Hi, I am a react app</h1>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        My hobby : Chess
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
  //Method#2 :
  // return React.createElement('div',{className:'app'},React.createElement('h1',null,'I am Fojan'))
};
export default app;

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
//-------------------------Class Componenet------------------------------------
// class App extends Component {
//   //Class Component
//   state = {
//     //State is an JS object
//     persons: [
//       //persons is array of objects (JSON format)
//       { name: "Mike", age: 20 },
//       { name: "Jenny", age: 32 },
//       { name: "Niel", age: 40 },
//     ],
//   };
//   eventHandler = () => {
//     console.log('You clicked the button!');
//     //DO NOT DO THIS : this.state.persons[0].name="Fojan"
//     this.setState({ //setState() is a method in Component class and App inheret it.
//       persons: [
//         { name: "Fojan", age: 20 },
//         { name: "Jenny", age: 32 },
//         { name: "Niel", age: 40 },
//       ],
//     });
//   };
//   render() {
//     //Method #1 :
//     return (
//       <div className="app">
//         <button onClick={this.eventHandler}>Swith Name</button>
//         <h1>Hi, I am a react app</h1>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         >
//           My hobby : Chess
//         </Person>
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         />
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//     //Method#2 :
//     // return React.createElement('div',{className:'app'},React.createElement('h1',null,'I am Fojan'))
//   }
// }
// export default App;
