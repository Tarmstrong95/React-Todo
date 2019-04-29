import React from "react";
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div>
      {props.list.map(( item, i)=> <Todo key={i} id={props.id} complete={props.complete} toggle={props.toggle} todo={item}/> )}
    </div>
  );
};

export default TodoList;
