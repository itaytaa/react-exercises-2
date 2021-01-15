import React, { useState, useRef } from 'react';
import './Todo.scss';
import Li from './Li/Li';

function Todo() {

	const input = useRef()
	const [tasks, setTasks] = useState([]);

	function submit(e) {
		e.preventDefault();
		setTasks([...tasks, input.current.value])
		e.target.reset()


	}
	function remove(idx) {
		let copy = tasks.filter((task, index) =>  index !== idx )
			setTasks(copy)
	}

	return (
		<div className="Todo" >
			<form onSubmit={(e) => submit(e)}>
				<h3>Todo List:</h3>
				<p>Make a Todo list (add & delete options):</p>
				<input placeholder="Your task..." ref={input} /> <button>Add task</button>
			</form>
			<ul>
				{tasks.map((task, index) => {

					return <Li task={task} key={index} remove={() => remove(index)} />
				})}

			</ul>

		</div>
	)
}

export default Todo;
