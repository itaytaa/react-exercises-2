import React from 'react'

function Li(props) {

    const task=props.task
    const remove= props.remove

    return (
        <li>
            {task} <button onClick={remove} >X</button>
        </li>
    )
}

export default Li
