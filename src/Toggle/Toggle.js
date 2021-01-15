import React, { useState } from 'react';
import logo from './logo.svg';
import './Toggle.scss';

function Toggle() {

	const [isShown, setToggle] = useState(true)

function toggle(){
	setToggle(!isShown)
}

	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={toggle}>Show / Hide</button>
			<div className="Toggle__logo-wrapper">

				{isShown && <img src={logo} alt="logo" />}
			</div>
		</div>
	)
}

export default Toggle;
