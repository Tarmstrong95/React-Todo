import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoList = [
  {
    task: 'Run', 
    id: Date.now(),
    completed: false
  },
  {
    task: 'Work Out', 
    id: Date.now(),
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
        completed: ''
      }
    }
  }

  componentDidMount(){
    this.updateAll();
  }

  updateAll = () => {
    this.setState({
      toDo: {
        ...this.state.toDo,
        task: '',
        id: '',
        completed: 'false'
      }
    })
  }

updateInput = (e) => {
  this.setState({
    toDo: {
      ...this.state.toDo,
      task: e.target.value
    }
  })
}


submit = (e) => {
  e.preventDefault();
  this.setState({
    toDoList: [...this.state.toDoList, this.state.toDo],
    toDo: {
      task: '',
      id: '',
      completed: ''
    }
  })
}




  render() {
    return (
      <div>
        <TodoList list={this.state.toDoList}/>
        <TodoForm input={this.updateInput} submit={this.submit}/>
      </div>
    );
  }
}

export default App;
