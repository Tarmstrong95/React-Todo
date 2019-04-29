import React from 'react';

const Todo = props => {

    let classes = "item";
    if(props.todo.completed){
        classes += ' strike';
    }

    function updateComplete(){
        props.toggle(props.todo.id);
    }


    return(
        <li className={classes} onClick={updateComplete}>
        {props.todo.task}
        </li>
    )
}

export default Todo;