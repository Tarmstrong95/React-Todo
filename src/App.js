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
    toDoList: [this.state.toDo, ...this.state.toDoList],
    toDo: {
      task: '',
      id: '',
      completed: false
    }
  })

}


toggleDone = (e) => {
this.setState({
  toDoList: this.state.toDoList.map(x => 
    x.id === e ? {...x, completed: !x.completed} : x)
})
}


deleteItem = (e) => {
  e.preventDefault();
  this.setState({
    toDoList: this.state.toDoList.filter(x => !x.completed)
  })
}


  render() {
    return (
      <div className="app">
      <TodoForm 
        value={this.state.toDo.task} 
        input={this.updateInput} 
        submit={this.submit} 
        delete={this.deleteItem}
        />
        <TodoList 
        id={this.state.toDo.id} 
        list={this.state.toDoList} 
        toggle={this.toggleDone}
        />
      </div>
    );
  }
}

export default App;