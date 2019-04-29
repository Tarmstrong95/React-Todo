import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoList = [
  {
    task: 'Run', 
    id: 651191,
    completed: false
  },
  {
    task: 'Work Out', 
    id: 491651651,
    completed: false
  }
]
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDoList: todoList,
      toDo :  {
        task: '', 
        id: '',
        completed: false
      }
    }
  }


updateInput = (e) => {
  this.setState({
    toDo: {
      ...this.state.toDo,
      task: e.target.value,
      id: Date.now()
    }
  })
}


submit = (e) => {
  e.preventDefault();

  if(this.state.toDo.task !== "") // If input has value - submit
 this.setState({
    toDoList: [...this.state.toDoList, this.state.toDo],
    toDo: {
      task: '',
      id: '',
      completed: false
    }
  })

}


toggleDone = (e) => {
  e.target.classList.toggle('strike');
const bool = e.target.getAttribute("complete");
  bool === "false" ?
  e.target.setAttribute("complete", "true") : e.target.setAttribute('complete', 'false')
}


deleteItem = (e) => {
  e.preventDefault();
}


  render() {
    return (
      <div>
        <TodoList 
        id={this.state.toDo.id} 
        complete={this.state.toDo.completed} 
        list={this.state.toDoList} 
        toggle={this.toggleDone}
        />
        <TodoForm 
        value={this.state.toDo.task} 
        input={this.updateInput} 
        submit={this.submit} 
        delete={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
