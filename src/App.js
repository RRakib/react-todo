import React, { Component } from 'react';
import Todos from "./Components/Todos"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
         todo : [
           {
             id: 1,
             title : "Wakeup at 8am",
             completed: true
           },
           {
             id: 2,
             title : "Sit for code",
             completed: false
           }
         ]

    }
  }
  markComplete = (id) => {
    this.setState({
      todo : this.state.todo.map((items) => {
        if(items.id === id){
          items.completed = !items.completed
        }
        return items;
      })
    })
  }
  handleClick = (id) => {
    this.setState({
      todo : this.state.todo.filter((items) => {
        return(
        items.id !== id
        )
      })
    })
  }
  handleSubmit = (title) => {
    let num = Math.floor(Math.random() * 10);
    console.log(num)
    let newTodo = 
      {
        id : num,
        title,
        completed : false
      }
    this.setState({
      todo : [...this.state.todo , newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <Todos 
            todos={this.state.todo}
            markComplete = {this.markComplete}
            handleClick  = {this.handleClick}
            handleSubmit = {this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
