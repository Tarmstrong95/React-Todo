import React from 'react';

const Todo = props => {
    return(
        <li id={props.id} complete={props.complete.toString()} onClick={props.toggle}>{props.todo.task}</li>
    )
}

export default Todo;