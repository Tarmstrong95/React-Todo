import React from "react";
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div>
      {props.list.map(item => <Todo todo={item}/> )}
    </div>
  );
};

export default TodoList;
