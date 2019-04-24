import React from 'react';

const Todo = props => {
    return(
        <li isComplete={props.complete} onClick={props.toggle}>{props.todo.task}</li>
    )
}

export default Todo;