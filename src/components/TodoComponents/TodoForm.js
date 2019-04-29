import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.submit} className="form">
            <input placeholder="...add todo" value={props.value} onChange={props.input}/>
            <button>Add Todo</button>
            <button onClick={props.delete}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;