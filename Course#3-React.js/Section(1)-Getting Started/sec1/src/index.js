//index.js is respnsible for 'rendering' the App.js component
//We could delete index.js from src folder and put render() method
//in App.js instead.

import React from "react";
import ReactDOM from "react-dom"; //ReactDOM.render() method belongs to ReactDOM
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App/>,document.getElementById("root"));


reportWebVitals();
