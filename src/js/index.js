//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { SecondsCounter } from "./component/SecondsCounter";

//render your react application
ReactDOM.render(
	<SecondsCounter
		seconds={parseInt(prompt("Ingrese el número de segundos: "))}
	/>,
	document.querySelector("#app")
);
