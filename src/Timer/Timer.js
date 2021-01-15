import React, { useState, useEffect } from 'react';
import './Timer.scss';

function Timer() {
	const [seconds, setTimer] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setTimer((prevSeconds) => prevSeconds + 1)
		}, 1000);
		return ()=>clearInterval(timer)
	}, [])

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{seconds}</div>
		</div>
	)
}

export default Timer;
