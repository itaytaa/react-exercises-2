import React from 'react'

function Li(props) {

    const mark = props.mark
    const text = props.text


    function display(text, mark) {
        if (text.includes(mark)) {
            let replace = text.replaceAll(mark, `<span class="marker">${mark}</span>`)
            return <span dangerouslySetInnerHTML={{__html: replace}}/>
        }
        return text
    }


    return (
        <li>
            {display(text, mark)}
        </li>
    )
}

export default Li
