import React, { useState, useEffect } from "react";

export const SecondsCounter = props => {
	const [counter, setCounter] = useState(0);
	const [idCounter, setIdCounter] = useState();

	useEffect(
		() => {
			if (idCounter != undefined && counter >= props.seconds) {
				clearInterval(idCounter);
			}
		},
		[counter]
	);

	useEffect(() => {
		const time = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
		setIdCounter(time);
		return () => {
			clearInterval(time);
		};
	}, []);

	return (
		<div className="container">
			<h1>{counter}</h1>
		</div>
	);
};
