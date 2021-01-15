import React, {useState}from 'react';
import './Counter.scss';

function Counter() {

	const [number, setNumber] = useState(0)
	function increase() {
		setNumber(number + 1)

	}
	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={increase}>Increase</button>
			<div className="Counter__value">{number}</div>
		</div>
	)
}

export default Counter;
