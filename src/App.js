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


  render() {
    return (
      <div className="App">
        <h1>Hello I am Working</h1>
        <Todos todos={this.state.todo}/>
      </div>
    );
  }
}

export default App;
