import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input onChange={props.input}/>
            <button onClick={props.submit}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;