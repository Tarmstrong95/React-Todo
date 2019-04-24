import React from "react";
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div>
      {props.list.map(item => <Todo complete={props.complete} toggle={props.toggle} todo={item}/> )}
    </div>
  );
};

export default TodoList;
