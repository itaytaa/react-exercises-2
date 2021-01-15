import React, { useState } from 'react';
import './RealNumber.scss';




function RealNumber() {

	const [input, setInput] = useState('')

	function check(e) {
		let isNumber = true;
		e.target.value.split('').forEach(letter => {
			if (Number(letter) * 0 !== 0) {
				isNumber = false
			}
		});
		isNumber ? setInput(e.target.value) : setInput('')
	}

	return (

		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" onChange={check} />
			{ input && <button>Submit</button>}

		</div>
	)
}

export default RealNumber;
