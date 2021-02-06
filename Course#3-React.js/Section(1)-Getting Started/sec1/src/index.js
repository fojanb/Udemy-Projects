//index.js is respnsible for 'rendering' the App.js component
//We could delete index.js from src folder and put render() method
//in App.js instead.
import React from "react";
import ReactDOM from "react-dom"; //render() method belongs to ReactDOM
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App name="Peter" age="30"/>,document.getElementById("p1"));

ReactDOM.render(<App name="Max" age="45"/>,document.getElementById("p2"));

ReactDOM.render(<App name="Kelly" age="50"/>,document.getElementById("p3"));

ReactDOM.render(<App name="Amir" age="30"/>,document.getElementById("p4"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
