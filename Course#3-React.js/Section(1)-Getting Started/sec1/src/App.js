//App.js is our react component (Function Component)

import './App.css';

function App(props) { //Function Component
  return (
    <div className="person">
      <h3>Name: {props.name}</h3>
      <p>Age : {props.age}</p>
    </div>
    
  );
}

export default App;
