import React from "react";
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div className="list">
      {props.list.map(item => (
      <Todo key={item.id} toggle={props.toggle} todo={item}/>) )
    }
    </div>
  )
}

export default TodoList;
